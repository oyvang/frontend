# Changelog

A preview of major changes can be found in the Wiki ([Latest Changes](https://github.com/kcapp/frontend/wiki/Latest_Changes))
## [2.2.0] - 2021-12-04
#### Feature
- Support for reading player smartcard UIDs and adding player using smartcards
- New page `/venues/<id>/spectate` to spectate all matches at a given venue
- New button for `Next Match` on official tournament matches
- Additional custom voice announcements added
- New `Rematch`-button on match result page

#### Changed
- Support for other games types in OBS view
- Filter out "placeholder"-players on tournament overview page
- Correctly handle empty string vocal names
- Don't show `Rematch` button for Tournament matches
- Sort player by recently played on `index-controller`
- Reset screensaver timer on throw events on socket.io
- Correctly forward `index-controller` back to  home page on finished matches
- Prevent starting of mulitple matches from `index-controller`
- Player `elo` is shown on tournament standings

#### Fixed
- Correctly update `Tic-Tac-Toe` board between players
- Correctly handle `undo` in OBS view
- Set correct match type on Spectate page
- Bug displaying results for `X01 Handicap`

## [2.1.0] - 2021-10-17
#### Feature
- Added new game type `JDC Practice Routine`
- Added new game type `Knockout`
- Statistics for `X01 Handicap` type
- Buttons to filter players by name in controller
- Support for tie break game modes, with different type on last leg
- Bigger button layout mode for Tablet controllers

#### Changed
- Removed announcement of `0` score in `Cricket`
- Handle draw for 9 Dart Shootout between two players
- Reannounce start of match after 10s

#### Fixed
- Toggle Camera button to remove stream when not available
- Rendering bug when opening finished `Bermuda Triangle` matches
- Bug which allowed setting triple `Bull`
- Avoid forwaring on venue matches when already on the page
- Disable warmup button after first press
- `Continue match` from Controller if any match contained a bot
- Score incorrectly shown as not reset in `Gotcha`

## [2.0.0] - 2021-09-19
#### Feature
- Custom announcer for scores, match finishes, and more!
- Added new game type `Kill Bull`
- Added new game type `Gotcha`
- Added support for stream of board for each player using external stream URLs
- `Elo Changelog` page for player
- New `Controller` page optimized for tablets for easier starting of matches

#### Changed
- Added `Outshot Type` and `Tic-Tac-Toe` board to Spectate page
- Added `Bull` to `420` game type
- Correctly handle leg finish when multiple people are connected
- Updated to Marko 5
- Updated all dependencies to latest version

#### Fixed
- Score input for `X01 Handicap`
- Announce correct leg finished
- Issue causing new-leg announcements to be played twice
- Misc fixes and improvements


## [1.2.0] - 2020-10-10
#### Feature
- Added new game types `Tic-Tac-Toe`, `Bermuda Triangle`, and `420`

#### Changed
- Statistics grouped by office of match instead of player

#### Fixed
- Starting score resetting when changing attribute on match create page
- Using origin of request to make sure requests towards backend work from multiple hosts/IPs
- Removed some old unused methods
- Lots of minor fixes and improvements


## [1.1.0] - 2020-07-18
#### Feature
- New game types for `Around The World`, `Around The Clock`, and `Shanghai`
- Office selector to players, tournament and statistics page
- Venue selector on tournament admin page
- Added all game types to statistics page
- Section for global statistics on statistics page
- Simplified button inputs for Cricket
- Option to get QR code for current leg
- Option to show full set of buttons instead of simplified

#### Changed
- Multiple tweaks and improvments to multiple pages

#### Fixed
- Correctly show Top 10 statistics on tournament statistics page
- Allow cycling of scores with keyboard for supported game types
- Proper handling of error events when adding visits

## [1.0.0] - 2020-05-03
#### Feature
- Support for multiple game types, including `x01`, `9 Dart Shootout`, and `Cricket`
- Detailed statistics tracking for player scores, accuracy, Elo and more
- Practice mode against [kcapp-bot](https://github.com/kcapp/bot)
- Live spectating of games across locations
- Multiple score entry methods
    - Including [Unicorn Smartboard](https://github.com/kcapp/smartboard)

[2.2.0]: https://github.com/kcapp/frontend/compare/v2.2.0...v2.2.0
[2.1.0]: https://github.com/kcapp/frontend/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/kcapp/frontend/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/kcapp/frontend/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/kcapp/frontend/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/kcapp/frontend/releases/tag/v1.0.0
