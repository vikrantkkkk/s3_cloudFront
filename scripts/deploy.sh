#!/usr/bin/env bash
set -euo pipefail

# Load env vars from .env
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

BUCKET="${VITE_S3_BUCKET:?Set VITE_S3_BUCKET in .env}"
REGION="${VITE_AWS_REGION:-us-east-1}"

echo "Building production bundle..."
npm run build

echo "Syncing to s3://$BUCKET..."
aws s3 sync dist/ "s3://$BUCKET" \
  --region "$REGION" \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html" \
  --exclude "*.html"

aws s3 sync dist/ "s3://$BUCKET" \
  --region "$REGION" \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" \
  --include "*.html"

if [ -n "${VITE_CLOUDFRONT_URL:-}" ]; then
  DIST_ID=$(aws cloudfront list-distributions \
    --query "DistributionList.Items[?DomainName=='${VITE_CLOUDFRONT_URL#https://}'].Id" \
    --output text 2>/dev/null || true)

  if [ -n "$DIST_ID" ] && [ "$DIST_ID" != "None" ]; then
    echo "Invalidating CloudFront cache ($DIST_ID)..."
    aws cloudfront create-invalidation \
      --distribution-id "$DIST_ID" \
      --paths "/*"
  fi
fi

echo "Deploy complete!"
