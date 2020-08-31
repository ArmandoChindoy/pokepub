"use strict";

(function getPokemons() {
  var $modal, $overlay, $hideModal, $regions, $modal__title, $modal__image, pokemonTemplate, regionTemplate, createTemplate, getData, hideModal, showModal, showPokemonsByPokedex, addEventClick, container, renderPokemons, renderRegions, API_URL, API_URL_Pokedexs, _ref2, pokedexs;

  return regeneratorRuntime.async(function getPokemons$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          renderRegions = function _ref12(regionList, container) {
            // container.children[0].remove();
            regionList.forEach(function (region) {
              var HTMLString = regionTemplate(region);
              var regionElement = createTemplate(HTMLString);
              regionElement.addEventListener('load', function (event) {
                event.srcElement.classList.add('FadeIn');
              });
              addEventClick(regionElement, showPokemonsByPokedex);
              container.append(regionElement);
            });
          };

          renderPokemons = function _ref11(pokemonsList, container) {
            container.innerHTML = '';
            pokemonsList.forEach(function (pokemon) {
              var HTMLString = pokemonTemplate(pokemon);
              var pokemonElement = createTemplate(HTMLString);
              pokemonElement.addEventListener('load', function (event) {
                event.srcElement.classList.add('FadeIn');
              });
              addEventClick(pokemonElement, showModal);
              container.append(pokemonElement);
            });
          };

          addEventClick = function _ref10(element, event) {
            element.addEventListener('click', function () {
              event(element);
            });
          };

          showPokemonsByPokedex = function _ref9(element) {
            var url, _ref, pokemon_entries, pokemons, index;

            return regeneratorRuntime.async(function showPokemonsByPokedex$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    url = element.dataset.url;
                    _context2.next = 3;
                    return regeneratorRuntime.awrap(getData(url));

                  case 3:
                    _ref = _context2.sent;
                    pokemon_entries = _ref.pokemon_entries;
                    pokemons = [];
                    index = 0;

                  case 7:
                    if (!(index < pokemon_entries.length)) {
                      _context2.next = 16;
                      break;
                    }

                    _context2.t0 = pokemons;
                    _context2.next = 11;
                    return regeneratorRuntime.awrap(getData('https://pokeapi.co/api/v2/pokemon/' + pokemon_entries[index].entry_number));

                  case 11:
                    _context2.t1 = _context2.sent;

                    _context2.t0.push.call(_context2.t0, _context2.t1);

                  case 13:
                    index++;
                    _context2.next = 7;
                    break;

                  case 16:
                    renderPokemons(pokemons, container);

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          showModal = function _ref8(element) {
            $overlay.classList.add('active');
            $hideModal.addEventListener('click', hideModal);
            $modal.style.animation = 'modalIn .8s forwards';
            var title = element.dataset.name;
            var sprite = element.dataset.img;
            $modal__title.textContent = title;
            $modal__image.setAttribute('src', sprite);
          };

          hideModal = function _ref7() {
            $overlay.classList.remove('active');
            $modal.style.animation = 'modalOut .8s forwards';
          };

          getData = function _ref6(URL) {
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

          createTemplate = function _ref5(HTMLString) {
            var html = document.implementation.createHTMLDocument();
            html.body.innerHTML = HTMLString;
            return html.body.children[0];
          };

          regionTemplate = function _ref4(region) {
            return "<a class=\"regions__button\" data-url=\"".concat(region.url, "\">").concat(region.name, "</a>");
          };

          pokemonTemplate = function _ref3(pokemon) {
            return "<div class=\"container-row-pokemon\" data-img=".concat(pokemon.sprites.front_default, " data-name=").concat(pokemon.name, " data-id=").concat(pokemon.sprites.front_default, ">\n        <h2>").concat(pokemon.id, "</h2>\n        <img src=\"").concat(pokemon.sprites.front_default, "\" alt=\"").concat(pokemon.name, "\"/>\n        <h3>").concat(pokemon.name, "</h3>\n      </div>");
          };

          //HTML elements
          $modal = document.getElementById('modal');
          $overlay = document.getElementById('overlay');
          $hideModal = document.getElementById('hide-Modal');
          $regions = document.getElementById('regions'); //Modal Elements

          $modal__title = document.getElementById('modal__title');
          $modal__image = document.getElementById('modal__img'); //  HTML Objects to render

          /**
           * 
           * @param {Object} pokemon 
           */

          container = document.getElementById('container-row');
          /**
           * 
           * @param {Array} pokemonsList 
           * @param {HTMLObjectElement} container 
           */
          //Renders

          API_URL = 'https://pokeapi.co/api/v2/';
          API_URL_Pokedexs = "".concat(API_URL, "pokedex/");
          _context3.next = 21;
          return regeneratorRuntime.awrap(getData(API_URL_Pokedexs));

        case 21:
          _ref2 = _context3.sent;
          pokedexs = _ref2.results;
          renderRegions(pokedexs, $regions);

        case 24:
        case "end":
          return _context3.stop();
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