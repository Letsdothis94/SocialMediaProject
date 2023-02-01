Rails.application.routes.draw do

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#destroy'

  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'
  post '/posts/', to: 'posts#create'
  delete '/posts/:id', to: 'posts#destroy'
  patch '/posts/:id', to: 'posts#update'

  get '/comments', to: 'comments#index'
  get '/comments/:id', to: 'comments#show'
  post '/comments/', to: 'comments#create'
  delete '/comments/:id', to: 'comments#destroy'
end
