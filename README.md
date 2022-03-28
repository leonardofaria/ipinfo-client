# IPinfo (unofficial) Client

![npm](https://img.shields.io/npm/v/ipinfo-client) ![NPM](https://img.shields.io/npm/l/ipinfo-client) [![Buy me a coffee](https://badgen.net/badge/icon/buymeacoffee?icon=buymeacoffee&label)](https://www.buymeacoffee.com/leonardofaria) [![Twitter Follow](https://img.shields.io/twitter/follow/leozera?label=Follow%20on%20Twitter)](https://twitter.com/leozera/)


This is a small CLI to get IP info from your terminal. This NPM package is not related to the IPinfo company.

## Running

- You can install this globally by running `npm install -g ipinfo-client` or
- You can run this using npx: `npx ipinfo-client`

### API limits

There are a few limits if you are using their product without paying or at least, without having a free plan. Please check [IPinfo pricing page](https://ipinfo.io/pricing) for details.

## Options

`--format`: `json` (default), `table`, `city`, `location`

## Authentication

The CLI will use the environment variable `IPINFO_API_TOKEN` to authenticate its requests. This is optional.