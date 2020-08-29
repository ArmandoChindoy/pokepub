"use strict";

(function getPokemons() {
  var getData, createTemplate, pokemonTemplate, $modal, $overlay, $hideModal, $modal__title, $modal__image, hideModal, showModal, addEventClick, container, renderPokemons, API_URL, _ref, pokemon_entries, pokemons, index;

  return regeneratorRuntime.async(function getPokemons$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          renderPokemons = function _ref8(pokemonsList, container) {
            // container.children[0].remove();
            pokemonsList.forEach(function (pokemon) {
              var HTMLString = pokemonTemplate(pokemon);
              var pokemonElement = createTemplate(HTMLString);
              pokemonElement.addEventListener('load', function (event) {
                event.srcElement.classList.add('FadeIn');
              });
              addEventClick(pokemonElement);
              container.append(pokemonElement);
            });
          };

          addEventClick = function _ref7(element) {
            element.addEventListener('click', function () {
              showModal(element);
            });
          };

          showModal = function _ref6(element) {
            $overlay.classList.add('active');
            $hideModal.addEventListener('click', hideModal);
            $modal.style.animation = 'modalIn .8s forwards';
            var title = element.dataset.name;
            var sprite = element.dataset.img;
            $modal__title.textContent = title;
            $modal__image.setAttribute('src', sprite);
          };

          hideModal = function _ref5() {
            $overlay.classList.remove('active');
            $modal.style.animation = 'modalOut .8s forwards';
          };

          pokemonTemplate = function _ref4(pokemon) {
            return "<div class=\"container-row-pokemon\" data-img=".concat(pokemon.sprites.front_default, " data-name=").concat(pokemon.name, " data-id=").concat(pokemon.sprites.front_default, ">\n        <h2>").concat(pokemon.id, "</h2>\n        <img src=\"").concat(pokemon.sprites.front_default, "\" alt=\"").concat(pokemon.name, "\"/>\n        <h3>").concat(pokemon.name, "</h3>\n      </div>");
          };

          createTemplate = function _ref3(HTMLString) {
            var html = document.implementation.createHTMLDocument();
            html.body.innerHTML = HTMLString;
            return html.body.children[0];
          };

          getData = function _ref2(URL) {
            var response, data;
            return regeneratorRuntime.async(function getData$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(fetch(URL));

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return regeneratorRuntime.awrap(response.json());

                  case 5:
                    data = _context.sent;

                    if (!data) {
                      _context.next = 8;
                      break;
                    }

                    return _context.abrupt("return", data);

                  case 8:
                    throw new Error('There is not Data');

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          $modal = document.getElementById('modal');
          $overlay = document.getElementById('overlay');
          $hideModal = document.getElementById('hide-Modal');
          $modal__title = document.getElementById('modal__title');
          $modal__image = document.getElementById('modal__img');
          container = document.getElementById('container-row');
          API_URL = 'https://pokeapi.co/api/v2/pokedex/2/';
          _context2.next = 16;
          return regeneratorRuntime.awrap(getData(API_URL));

        case 16:
          _ref = _context2.sent;
          pokemon_entries = _ref.pokemon_entries;
          pokemons = [];
          index = 0;

        case 20:
          if (!(index < pokemon_entries.length)) {
            _context2.next = 29;
            break;
          }

          _context2.t0 = pokemons;
          _context2.next = 24;
          return regeneratorRuntime.awrap(getData('https://pokeapi.co/api/v2/pokemon/' + pokemon_entries[index].entry_number));

        case 24:
          _context2.t1 = _context2.sent;

          _context2.t0.push.call(_context2.t0, _context2.t1);

        case 26:
          index++;
          _context2.next = 20;
          break;

        case 29:
          renderPokemons(pokemons, container);

        case 30:
        case "end":
          return _context2.stop();
      }
    }
  });
})(); // (async function loadMovies() {
//     async function getData(URL) {
//         const response = await fetch(URL);
//         const data = await response.json();
//         if (data.data.movie_count > 0) {
//             return data;
//         }
//         throw new Error('No se encontro ningun resultado');
//     }
//     async function getDataUser(URL) {
//         const response = await fetch(URL);
//         const data = await response.json();
//         if (data.results.length > 0) {
//             return data.results;
//         }
//         throw new Error('No se encontro ningun resultado');
//     }
//     const $home = document.getElementById('home');
//     const $form = document.getElementById('form');
//     const $featuringContainer = document.getElementById('featuring');
//     function setAttributes($element, attributes) {
//         for (const attribute in attributes) {
//             $element.setAttribute(attribute, attributes[attribute]);
//         }
//     }
//     const BASE_APi = 'https://yts.mx/api/v2/'
//     function featuringTemplate(movie) {
//         return (`<div class="featuring">
//         <div class="featuring-image">
//             <img src="${movie.medium_cover_image}" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//             <p class="featuring-title">Pelicula encontrada</p>
//             <p class="featuring-album">${movie.title}</p>
//         </div>
//     </div>`)
//     }
//     $form.addEventListener('submit', async(event) => {
//         event.preventDefault();
//         $home.classList.add('search-active');
//         const $loader = document.createElement('img');
//         setAttributes($loader, {
//             src: 'src/images/loader.gif',
//             height: 50,
//             width: 50
//         })
//         $featuringContainer.append($loader);
//         const data = new FormData($form);
//         try {
//             const {
//                 data: {
//                     movies: movies
//                 }
//             } = await getData(`${BASE_APi}list_movies.json?limit=1&query_term=${data.get('name')}`)
//             const HTMLString = featuringTemplate(movies[0]);
//             $featuringContainer.innerHTML = HTMLString;
//         } catch (error) {
//             $loader.remove();
//             $home.classList.remove('search-active')
//             swal({
//                 title: 'Error',
//                 text: error.message,
//                 icon: 'error'
//             });
//         }
//     })
//     const $actionContainer = document.querySelector('#action');
//     const $dramaContainer = document.querySelector('#drama');
//     const $animationContainer = document.querySelector('#animation');
//     const $modal = document.getElementById('modal');
//     const $overlay = document.getElementById('overlay');
//     const $hideModal = document.getElementById('hide-modal');
//     const $modalTitle = $modal.querySelector('h1');
//     const $modalImage = $modal.querySelector('img');
//     const $modalDescription = $modal.querySelector('p');
//     function findById(id, list) {
//         return list.find(movie => movie.id === parseInt(id, 10));
//     }
//     function findMovie(id, category) {
//         switch (category) {
//             case 'action':
//                 return findById(id, actionMovies);
//                 break;
//             case 'drama':
//                 return findById(id, dramaMovies);
//                 break;
//             default:
//                 return findById(id, animationMovies);
//                 break;
//         }
//     }
//     function showModal(element) {
//         $overlay.classList.add('active');
//         $modal.style.animation = 'modalIn .8s forwards';
//         const id = element.dataset.id;
//         const category = element.dataset.category;
//         const data = findMovie(id, category);
//         $modalTitle.textContent = data.title;
//         $modalImage.setAttribute('src', data.medium_cover_image);
//         $modalDescription.textContent = data.description_full;
//     }
//     function hideModal() {
//         $overlay.classList.remove('active');
//         $modal.style.animation = 'modalOut .8s forwards';
//     }
//     $hideModal.addEventListener('click', hideModal);
//     function createTemplate(HTMLString) {
//         const html = document.implementation.createHTMLDocument();
//         html.body.innerHTML = HTMLString;
//         return html.body.children[0];
//     }
//     function videoTemplate(movie, category) {
//         return (`<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
//       <div class="primaryPlaylistItem-image">
//         <img src="${movie.medium_cover_image}">
//       </div>
//       <h4 class="primaryPlaylistItem-title">
//         ${movie.title}
//       </h4>
//     </div>`)
//     }
//     function addEventClick(element) {
//         element.addEventListener('click', () => {
//             showModal(element);
//         });
//     }
//     function renderMovieList(moviesList, container, category) {
//         container.children[0].remove();
//         moviesList.forEach(movie => {
//             const HTMLString = videoTemplate(movie, category);
//             const movieElement = createTemplate(HTMLString);
//             const image = movieElement.querySelector('img')
//             image.addEventListener('load', (event) => {
//                 event.srcElement.classList.add('fadeIn');
//             })
//             addEventClick(movieElement);
//             container.append(movieElement);
//         });
//     }
//     async function cacheExistMovies(category) {
//         const listNAme = `${category}List`;
//         const cacheList = this.localStorage.getItem(listNAme);
//         if (cacheList) {
//             return JSON.parse(cacheList);
//         }
//         const { data: { movies: data } } = await getData(`${BASE_APi}list_movies.json?genre=${category}`);
//         this.localStorage.setItem(listNAme, JSON.stringify(data));
//         return data;
//     }
//     const actionMovies = await cacheExistMovies('action');
//     renderMovieList(actionMovies, $actionContainer, 'action');
//     const dramaMovies = await cacheExistMovies('drama');
//     renderMovieList(dramaMovies, $dramaContainer, 'drama');
//     const animationMovies = await cacheExistMovies('animation');
//     renderMovieList(animationMovies, $animationContainer, 'animation');
//     const BASE_API_RANDOM_USER = 'https://randomuser.me/api/?results=8';
//     const $friendListContainer = document.getElementById('playlistFriends');
//     function friendListItemTemplate(friend) {
//         return `
//         <li class="playlistFriends-item" id="playlistFriends-item">
//                             <a href="#">
//                                 <img src="${friend.picture.thumbnail}" alt="echame la culpa" />
//                                 <span>${friend.name.first} ${friend.name.last}</span>
//                             </a>
//                         </li>
//                         `
//     }
//     function renderFriendList(friendList, container) {
//         friendList.forEach(element => {
//             const friendHTMLString = friendListItemTemplate(element);
//             const friendTemplate = createTemplate(friendHTMLString);
//             const friendImage = document.querySelector('img');
//             container.append(friendTemplate)
//             friendImage.addEventListener('load', () => friendImage.classList.add('fadeIn'));
//         });
//     }
//     const friendList = await getDataUser(`${BASE_API_RANDOM_USER}`);
//     renderFriendList(friendList, $friendListContainer);
// })()