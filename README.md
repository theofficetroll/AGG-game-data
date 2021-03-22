# AGG-game-data
App which will store information about games from diverse artists, designers, etc and query BGG for game data.

# BGG API
User collection:
https://www.boardgamegeek.com/xmlapi2/collection?username=<name>
Game name:
https://www.boardgamegeek.com/xmlapi2/search?query=<game+name>
Game ID:
https://www.boardgamegeek.com/xmlapi2/thing?id=<id>

# Data returned on Game ID query
type: game, expansion
thumbnail: link for thumbnail image
image: link for full image
name: will list all names with value, type, sortindex
description: name description
yearpublished: yyyy format
minplayers: p format
maxplayers: p format
poll: suggested players: results: p or p+ format
playingtime: h:mm format
minplaytime: h:mm format
maxplaytime: h:mm format
minage: a format
suggested_playerage:
language_dependence:
boardgamecategory: value:
boardgamemechanic: value: any number of mechanics can be listed as seperate entries
boardgamefamily: value: usually format Game: <base game>
boardgamefamily: value: usually format Theme: <theme>
boardgameexpansion: if an expansion, value will list the base game's name
boardgamepublisher: value: name of publisher, any number of publishers can be listed as separate entities
