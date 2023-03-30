#!/usr/bin/env bash

# Fail on first error.
set -e
# SKEL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../../../skel" && pwd)"
SKEL_DIR="/tmp/skel"
echo ${SKEL_DIR}
cd "$(dirname "${BASH_SOURCE[0]}")"

# SKEL_URI="http://release.fabu.ai/deps/skel.tar.gz"
# SKEL_URI="git@git.fabu.ai:open/user-skel.git"

rm -rf /etc/skel
cd /etc
cp -r ${SKEL_DIR} .
# git clone ${SKEL_URI}
# wget ${SKEL_URI}
# tar -axf skel.tar.gz
# rm -rf skel.tar.gz
