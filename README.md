# California Privacy Directory

The following is an alphabetical ordered list of companies and URLs to perform a Data Subject Access Request (DSAR) and exercise your rights under this law.

# Goal

AB-375, officially called the California Consumer Privacy Act (CCPA), is a state statute to enhance privacy rights and consumer protections for residents of the US State of California.
Under AB-375, California residents have the right to:

1. Know what personal data is collected about them.
2. Know if their personal data is sold or disclosed and to whom.
3. Opt-out of the sale of personal data.
4. Access their personal data.
5. Request businesses to delete all personal information collected about the consumer.
6. Not discriminate in service for exercising their privacy rights under it.

# Contributing

It is preferred that any additions to this list include links to the California section or form. To contribute, just send a pull request!
Changes will be merged in and updated. Please read the guidelines heres [Contributing](https://github.com/caprivacy/caprivacy/blob/master/CONTRIBUTING.md).

# Development

```sh
export JEKYLL_VERSION=3.8
docker run -p 4000:4000 --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" -it jekyll/jekyll:$JEKYLL_VERSION jekyll build --watch
```
