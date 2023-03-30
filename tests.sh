#!/usr/bin/env bash
set -e
npx jest --testTimeout=300000 --verbose --runInBand --detectOpenHandles --forceExit
