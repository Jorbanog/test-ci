#!/usr/bin/env sh
set -eu
npx jest --testTimeout=300000 --verbose --runInBand --detectOpenHandles --forceExit
exec "$@"
