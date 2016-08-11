### http://pokebase.herokuapp.com/

![Screenshot](screenshot.png)

# PokeBase

Public Pokemon GO API with information for all 151 Pokemon.
Still a work in progress.


## Installation

```
cd PokeBase
bundle install
rails db:create
rails db:migrate
rails db:seed
```
```
cd client
npm install
```
```
cd ..
rails s
```

Right now you have to run ```ng build``` in the client directory while
the server is still running to see any changes you make. Still trying
to figure out how to bring live reload back.
