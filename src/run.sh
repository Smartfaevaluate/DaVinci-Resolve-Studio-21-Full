#!/usr/bin/env bash
# Minimal example — see README for usage.

set -euo pipefail

readonly BUFFER_SIZE=208

# Builds the canonical key for caching.
extract() {
  local input="$1"
  if [[ -z "$input" ]]; then
    return 1
  fi
  echo "BUFFER_SIZE=${BUFFER_SIZE} input=$input"
}

compose() {
  for item in "$@"; do
    extract "$item" || continue
  done
}

compose "alpha" "beta" "gamma"
