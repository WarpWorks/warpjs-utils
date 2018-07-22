# WarpJS-utils Releases

## 1.2.23 - 2018-07-21

- Adding `sendErrorHal`.

## 1.2.22 - 2018-06-27

- Adding header menu.

## 1.2.18 - 2018-06-19

- Missing `debug` dependency.

## 1.2.17 - 2018-05-25

- Explicit definition of `Promise`.
- Removed dependency on `chai-as-promised`.

## 1.2.16 - 2018-03-07

- Adding heading for loading toast.

## 1.2.15 - 2018-01-25

- Revert changes for DocLevel model.

## 1.2.14 - 2018-01-25

- Handling Enum.

## 1.2.13 - 2018-01-25

- Created DocLevel model to handle docLevel/updatePath manipulation.

## 1.2.12 - 2018-01-19

- Fixed bundle names to match `.min.js`.

## 1.2.11 - 2018-01-19

- Renamed some files/variables to mention edition instead of content.
- Added different background color for Studio.

## 1.2.10 - 2018-01-04

- Fixed debug label
- Put plugins as peerDependencies.

## 1.2.9 - 2017-12-22

- Added `Content-Type` to `post()`.
- Adding some 'doc-level` utilities.
- Refactored `proxy` to have consistent headers.
- Fixed route expansion to always replace params due to query params.

## 1.2.8 - 2017-12-08

- Bump down jquery to @2.

## 1.2.7 - 2017-12-08

- Adding the shared 3rd party lib in here.
- Used another `toast` library because of bugs in previous one.

## 1.2.6 - 2017-12-06

- Adding `toastr` library. Updated [README.md](README.md) for API. Updated
  `jquery@3`.

## 1.2.5 - 2017-12-01

- Adding custom class for seemless input group-addon.

## 1.2.2 - 2017-11-30

- Added missing clickable class to search elements.

## 1.2.1 - 2017-11-29

- Fixed minor typo.

## 1.2.0 - 2017-11-29

- Adding the search in the header.

## 0.2.6 - 2017-11-15

- Moved proxy and cache from warpjs to this package.

## 0.2.5 - 2017-10-17

- Adding momentJS helper `momentLongFormat` and `momentFromNow`.

## 0.2.4 - 2017-10-11

- Using hal@0.x instead of hal@1.x

## 0.2.2 - 2017-10-11

- More refactoring for handlebars.

## 0.2.1 - 2017-10-06

- Check `err` before using `err.message`.

## 0.2.0 - 2017-10-06

- Added handlebars views, partials, and helpers.

## 0.1.14 - 2017-09-08

- Adding session-related links in sendHal().

## 0.1.13 - 2017-08-09

- byPositionThenName() now handles both `Position` and `position` properties.

## 0.1.12 - 2017-07-31

- Fixed sendHal() to not break if homepage is not defined (useful for tests).

## 0.1.11 - 2017-07-26

- Adjusting sendHal() and sendError() with RoutesInfo.

## 0.1.10 - 2017-07-25

- Added '.trace()'.

## 0.1.9 - 2017-07-24

- Modified signature of sendHal().
- Adding mapBrowser link.

## 0.1.8 - 2017-07-21

- Adding compareIDs().

## 0.1.7 - 2017-07-20

- Allow passing more than one bundle in sendIndex();
- Added urlFormat().
- Fixed export name getCurrentPageHAL().

## 0.1.6 - 2017-07-19

- Adding getCurrentPageHal().

## 0.1.5 - 2017-07-19

- Managing sendIndex bundle's path.

## 0.1.4 - 2017-07-19

- Adding param for CSS file.

## 0.1.3 - 2017-07-17

- Adding createResource, sendError, sendHal, sendIndex, wrapWith406.

## 0.1.2 - 2017-07-17

- Adding WarpJSError.

## 0.1.1 - 2017-07-17

- Fixed main entry.

## 0.1.0 - 2017-07-17

- Initial release.
