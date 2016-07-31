Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :pokemons
    end
  end

  resources :pokemons
  resources :home, only: [:index]
  get 'home/data', defaults: { format: 'json' }
end
