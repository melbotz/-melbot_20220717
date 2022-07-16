#!/usr/bin/env bash

# git push github
git remote | xargs -L1 git push --all
npm publish

#RELAY="ws://nostr.rocks:1617"
RELAY=$(git config gitmark.relay)
GENESIS="gitmark:6e8f742a437eff5944d0e761d55a76d7383b9e7728df41e1d7b6e39c2a03ced4:0"
CREATED=1658011129


git-mark-list $(git config gitmark.secret) --genesis "${GENESIS}" --created "${CREATED}" -g $(cat package.json | jq -r '.repository.url')  | websocat $RELAY
