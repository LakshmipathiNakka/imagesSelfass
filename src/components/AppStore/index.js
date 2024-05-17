import {Component} from 'react'

import CityItem from '../CityItem'
import TabItem from '../TabItem'

import './index.css'

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

const tabsList = [
  {tabId: 'ANIMALS', displayText: 'Animals'},
  {tabId: 'BIRDS', displayText: 'Birds'},
  {tabId: 'FLOWERS', displayText: 'Flowers'},
  {tabId: 'MOUNTAINS', displayText: 'Mountains'},
  {tabId: 'BEACHES', displayText: 'Beaches'},
  {tabId: 'HYDERABAD', displayText: 'Cities'},
]

const citiesList = [
  {
    cityId: 0,
    cityName: 'Tiger',
    imageUrl:
      'https://img.freepik.com/free-photo/tiger-looking-with-open-mouth_1150-18083.jpg?t=st=1715924746~exp=1715928346~hmac=e97a1b563580d908bd7981c7f42ebbf49c151368ae34d832a3874de5170db2bc&w=740',
    category: 'ANIMALS',
  },
  {
    cityId: 1,
    cityName: 'Monkey',
    imageUrl:
      'https://img.freepik.com/free-photo/monkey-living-nature_167946-168.jpg?t=st=1715924825~exp=1715928425~hmac=a7284ea1dd3c8264b0c972df27ebc99dc97d342fc13884d62f3d1594b2a61af0&w=740',
    category: 'ANIMALS',
  },
  {
    cityId: 2,
    cityName: 'Elephant',
    imageUrl:
      'https://img.freepik.com/free-photo/vertical-shot-african-elephant-with-blurred-background_181624-13493.jpg?t=st=1715924856~exp=1715928456~hmac=b09fd56d4077d1fe8bd698aa2ffcfe74e00b655f561e5b25e26068f6b19a054e&w=740',
    category: 'ANIMALS',
  },
  {
    cityId: 3,
    cityName: 'Zebra',
    imageUrl:
      'https://img.freepik.com/free-photo/beautiful-baby-zebra-sitting-ground-captured-african-jungle_181624-35400.jpg?t=st=1715924890~exp=1715928490~hmac=c14d72343c64aedd15e23676a50c293481bd3a031c27cf6e97b3d498152ce11b&w=900',
    category: 'ANIMALS',
  },
  {
    cityId: 4,
    cityName: 'Deer',
    imageUrl:
      'https://img.freepik.com/free-photo/impala-savannah_167946-146.jpg?t=st=1715924930~exp=1715928530~hmac=ca089182fbca48c28a6fef173fa8c0242bac3399cdbd90d9c6beef4cfe5e228f&w=740',
    category: 'ANIMALS',
  },
  {
    cityId: 5,
    cityName: 'Giraffe',
    imageUrl:
      'https://img.freepik.com/free-photo/giraffe-natural-environment_155003-6502.jpg?t=st=1715924979~exp=1715928579~hmac=70c17becc78cff578b1d1c9798bfae394aacaee0a35781f4eb924b9ecc3e779b&w=740',
    category: 'ANIMALS',
  },
  {
    cityId: 6,
    cityName: 'Rhinoceros',
    imageUrl:
      'https://img.freepik.com/free-photo/indian-rhinoceros-beautiful-nature-looking-habitat-one-horned-rhino-endangered-species-biggest-kind-rhinoceros-earth_475641-1952.jpg?t=st=1715925040~exp=1715928640~hmac=9e12cebc2a884749f536b179bfd9f4b614d3326b61e347a1299984cdfea4d570&w=740',
    category: 'ANIMALS',
  },
  {
    cityId: 7,
    cityName: 'Red Panda',
    imageUrl:
      'https://img.freepik.com/premium-photo/cute-red-panda-portrait_850000-49452.jpg?w=900',
    category: 'ANIMALS',
  },
  {
    cityId: 8,
    cityName: 'Lion',
    imageUrl:
      'https://img.freepik.com/free-photo/african-lion-portrait-warm-light_475641-46.jpg?t=st=1715925145~exp=1715928745~hmac=f2aacceb232377860ddfdec86485e98c4f4e3c33251ba01c276bd6b3c0b7db56&w=900',
    category: 'ANIMALS',
  },
  {
    cityId: 9,
    cityName: 'Leopard',
    imageUrl:
      'https://img.freepik.com/free-photo/majestic-big-cats-wild-stare-generated-by-ai_188544-35619.jpg?t=st=1715925186~exp=1715928786~hmac=b7ffac6b4983f7423344b9c3ea2dae016e628be2c188ccba79e2b764fc94900b&w=1060',
    category: 'ANIMALS',
  },

  {
    cityId: 10,
    cityName: 'Golkonda Fort',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a3/62/98/golkonda-fort.jpg?w=500&h=400&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 11,
    cityName: 'Charminar',
    imageUrl:
      'https://img.freepik.com/premium-photo/architecture-charminar-four-minarets-is-monument-mosque-located-hyderabad-india_380726-782.jpg?w=826',
    category: 'HYDERABAD',
  },
  {
    cityId: 12,
    cityName: 'Nehru Zoo park',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c1/42/26/caption.jpg?w=500&h=-1&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 13,
    cityName: 'Balaji Temple',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/86/b3/ae/adorable-place.jpg?w=500&h=-1&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 14,
    cityName: 'Birla Mandir',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/56/ff/7a/photo0jpg.jpg?w=500&h=400&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 15,
    cityName: 'Calvary Temple',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e4/89/76/the-temple.jpg?w=500&h=-1&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 16,
    cityName: 'Film City',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f3/ad/1a/filmi-duniya.jpg?w=500&h=400&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 17,
    cityName: 'Wonderla',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b4/a5/47/flash-tower-is-a-shoot.jpg?w=500&h=-1&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 18,
    cityName: 'Buddha Statue',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/fa/0f/6b/buddha-statue.jpg?w=500&h=-1&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 19,
    cityName: 'NTR Garden',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/ca/97/c9/ntr-garden.jpg?w=500&h=-1&s=1',
    category: 'HYDERABAD',
  },
  {
    cityId: 20,
    cityName: 'Wood pecker',
    imageUrl:
      'https://img.freepik.com/free-photo/closeup-shot-redbellied-woodpecker-tree_181624-61613.jpg?t=st=1715925313~exp=1715928913~hmac=8186b71f080f2c4324b6a0ed649fb3725508b877fcbde19af087a4a6f50de712&w=740',
    category: 'BIRDS',
  },
  {
    cityId: 21,
    cityName: 'Humming',
    imageUrl:
      'https://img.freepik.com/free-photo/selective-focus-shot-hummingbird-flight_181624-56855.jpg?t=st=1715925373~exp=1715928973~hmac=dd80371e9e5192c7cefde994b98adeda6e74c8982dd8d9500552bd620de1e4e8&w=740',
    category: 'BIRDS',
  },
  {
    cityId: 22,
    cityName: 'King Fisher',
    imageUrl:
      'https://img.freepik.com/free-photo/colorful-kingfisher-bird-sitting-tree-branch_181624-42139.jpg?t=st=1715925437~exp=1715929037~hmac=89f520f9a11fe6e0b3e279f5bf4412e1aa1b01af45a650f3535c378417d8728a&w=900',
    category: 'BIRDS',
  },
  {
    cityId: 23,
    cityName: 'Seagull',
    imageUrl:
      'https://img.freepik.com/free-photo/selective-focus-shot-white-seagull-stone_181624-47251.jpg?t=st=1715925521~exp=1715929121~hmac=eb2d97584ff81378f295805c39eabd142cd1cb7c2084813f4a4eb9c9bb8b6167&w=900',
    category: 'BIRDS',
  },
  {
    cityId: 24,
    cityName: 'Dove',
    imageUrl:
      'https://img.freepik.com/premium-photo/white-dove-isolated-white-background-flying-bird-with-wings-spread-generative-ai_634053-3060.jpg?w=740',
    category: 'BIRDS',
  },
  {
    cityId: 25,
    cityName: 'SunBird',
    imageUrl:
      'https://img.freepik.com/free-photo/sunbird-nectarinia-jugularis-female-feeding-new-born-chicks-branch_488145-414.jpg?t=st=1715925555~exp=1715929155~hmac=408b59f0830cdf16aab618c3f405d3b401d38c284331ec99996c61c7abb46580&w=900',
    category: 'BIRDS',
  },
  {
    cityId: 26,
    cityName: 'Pelican',
    imageUrl:
      'https://img.freepik.com/free-photo/great-white-pelican-lake-savannah_167946-118.jpg?t=st=1715925608~exp=1715929208~hmac=4a3aabccd0b35968257cada991e5ca64b3f965187f05ebe7667848e63f95a5bd&w=900',
    category: 'BIRDS',
  },
  {
    cityId: 27,
    cityName: 'Eagle',
    imageUrl:
      'https://img.freepik.com/premium-photo/bald-eagle-drawing-isolated-white-background_33869-2109.jpg?w=740',
    category: 'BIRDS',
  },
  {
    cityId: 28,
    cityName: 'Bea-eater',
    imageUrl:
      'https://img.freepik.com/free-photo/beautiful-shot-bee-eater-bird-perched-branch-forest_181624-31908.jpg?t=st=1715925737~exp=1715929337~hmac=96c22a430bb3d66e4f395a69ecf01bf107744d9febd17de6eef4ac8a3419b46a&w=900',
    category: 'BIRDS',
  },
  {
    cityId: 29,
    cityName: 'Peacock',
    imageUrl:
      'https://img.freepik.com/premium-photo/peacock-with-blue-green-tail-is-shown_579873-6986.jpg?w=826',
    category: 'BIRDS',
  },
  {
    cityId: 30,
    cityName: 'Swan',
    imageUrl:
      'https://img.freepik.com/free-photo/beautiful-swan-lake-amazing-bird-nature-habitat_475641-321.jpg?t=st=1715925916~exp=1715929516~hmac=edf5808b777869f64e53e56b4e1da4c24e8b173a3e9e937649ca2c80c43fb0bc&w=900',
    category: 'BIRDS',
  },
  {
    cityId: 31,
    cityName: 'Tryund HIlls',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/42/10/8e/triund-hill.jpg?w=500&h=400&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 32,
    cityName: 'Mullayanagiri',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/6e/54/05/img-20180922-090745-hdr.jpg?w=500&h=400&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 33,
    cityName: 'Dainkud Peak',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ed/3a/e3/img-20160415-220504-largejpg.jpg?w=500&h=400&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 34,
    cityName: 'Kanchenjunga',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f6/77/2b/queen-of-hills.jpg?w=500&h=400&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 35,
    cityName: 'Apharwat',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ec/b0/41/img-20180131-wa0006-largejpg.jpg?w=500&h=400&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 36,
    cityName: 'Nandhi Hills',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9b/9a/3e/20160612-141224-largejpg.jpg?w=500&h=400&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 37,
    cityName: 'Yume Samdang',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/e9/70/a3/yumesamdong-zero-point.jpg?w=500&h=-1&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 38,
    cityName: 'Chembra Peak',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/13/14/e9/do-not-miss-this-view.jpg?w=500&h=400&s=1',
    category: 'MOUNTAINS',
  },
  {
    cityId: 39,
    cityName: 'Dodda Betta',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/06/1e/34/photo1jpg.jpg?w=500&h=-1&s=1',
    category: 'MOUNTAINS',
  },

  {
    cityId: 40,
    cityName: 'Jasmine',
    imageUrl:
      'https://img.freepik.com/premium-photo/fivepetaled-white-jasmine-flowers-are-bloomingwhite-colorsmall-five-petals-with-yellow-pollen_613001-443.jpg?w=826',
    category: 'FLOWERS',
  },
  {
    cityId: 41,
    cityName: 'WaterLilies',
    imageUrl:
      'https://img.freepik.com/free-photo/water-lilies-basking-suns-glow-waters-surface_157027-4036.jpg?t=st=1715926210~exp=1715929810~hmac=7ec96ee40c696a8b01adfffeb775f488fedfd05785fc169e9ab8a7073079fc5a&w=1380',
    category: 'FLOWERS',
  },
  {
    cityId: 42,
    cityName: 'Exotic',
    imageUrl:
      'https://img.freepik.com/premium-photo/high-quality-detailed-closeup-image-beautiful-exotic-flower_1001076-1717.jpg?w=740',
    category: 'FLOWERS',
  },
  {
    cityId: 43,
    cityName: 'Sunflower',
    imageUrl:
      'https://img.freepik.com/premium-photo/blooming-yellow-sunflower-with-green-leaves-isolated-white-background_116441-18874.jpg?w=740',
    category: 'FLOWERS',
  },
  {
    cityId: 44,
    cityName: 'Red Rose',
    imageUrl:
      'https://img.freepik.com/free-photo/bouquet-red-roses-valentine-s-day_2829-5293.jpg?t=st=1715926342~exp=1715929942~hmac=3844648079f0e5ddf85fc4982db24339408d77499e4edc879a9e826825f2fbe3&w=900',
    category: 'FLOWERS',
  },
  {
    cityId: 45,
    cityName: 'Freesia',
    imageUrl:
      'https://img.freepik.com/premium-photo/yellow-freesia-flowers-isolated-white-background_900706-24949.jpg?w=740',
    category: 'FLOWERS',
  },
  {
    cityId: 46,
    cityName: 'Cosmos',
    imageUrl:
      'https://img.freepik.com/free-photo/cosmos-flowers-isolated-white-background_1373-540.jpg?t=st=1715926407~exp=1715930007~hmac=9b35636d37a75e6ed67e39e526dfa24174c4383455a4efc129551272672ee6c4&w=900',
    category: 'FLOWERS',
  },
  {
    cityId: 47,
    cityName: 'Red Tulips',
    imageUrl:
      'https://img.freepik.com/premium-photo/peaceful-red-tulips-with-copy-space-3d-illustrated_768106-1504.jpg?w=740',
    category: 'FLOWERS',
  },
  {
    cityId: 48,
    cityName: 'Gladiolus',
    imageUrl:
      'https://img.freepik.com/free-photo/close-up-gladiolus-flower-details_23-2149417863.jpg?t=st=1715926621~exp=1715930221~hmac=562880fa9bf0fcd233e9127a5417cc6db48caeb51b3344224c2954c4bc207293&w=740',
    category: 'FLOWERS',
  },
  {
    cityId: 49,
    cityName: 'Pink Gerbera',
    imageUrl:
      'https://img.freepik.com/free-photo/pink-gerbera-flower-garden_1373-15.jpg?t=st=1715926657~exp=1715930257~hmac=05c39ec6b4cbfd3dc5354265e401713477c6d62083636530364e215582c25bf8&w=740',

    category: 'FLOWERS',
  },

  {
    cityId: 50,
    cityName: 'Condolim',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Candolim1.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 51,
    cityName: 'Chandipur',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2021/03/Sun_Rise_at_Chandipur_Sea_Beach.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 52,
    cityName: 'Cavelossim',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2021/03/9197708616_ffe6074ef3_b.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 53,
    cityName: 'BlueFlag',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2022/01/Puri-1200x900-1.jpeg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 54,
    cityName: 'Mandrem',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2022/01/223-min.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 55,
    cityName: 'Om beach',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2022/01/7-Om-Beach_1936292293-.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 56,
    cityName: 'Kovalam',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2021/03/4281746510_d496079876_b.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 57,
    cityName: 'varkala',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2017/12/Varkala_1.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 58,
    cityName: 'Kappad Beach',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2022/01/12-Kappad-Beach_1512010781.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
  {
    cityId: 59,
    cityName: 'Wandor',
    imageUrl:
      'https://www.fabhotels.com/blog/wp-content/uploads/2022/01/17-Wandoor-Beach_1342995179-.jpg:cf-webp:w-848:h-551',
    category: 'BEACHES',
  },
]

class AppStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
    currentPage: 0,
    citiesPerPage: 3,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId, currentPage: 0})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value, currentPage: 0})
  }

  getActiveTabCities = searchedCities => {
    const {activeTabId} = this.state
    const filteredCities = searchedCities.filter(
      eachSearchedCity => eachSearchedCity.category === activeTabId,
    )

    return filteredCities
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = citiesList.filter(eachCity =>
      eachCity.cityName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  handlePageChange = direction => {
    const {currentPage} = this.state
    const totalPages = this.totalPages()
    if (direction === 'prev') {
      this.setState({currentPage: Math.max(currentPage - 1, 0)})
    } else if (direction === 'next') {
      this.setState(prevState => ({
        currentPage: Math.min(prevState.currentPage + 1, totalPages - 1),
      }))
    }
  }

  totalPages = () => {
    const {citiesPerPage} = this.state
    return 2
  }

  render() {
    const {searchInput, activeTabId, currentPage, citiesPerPage} = this.state
    const searchResults = this.getSearchResults()
    const activeTabCities = this.getActiveTabCities(searchResults)
    const displayCities = activeTabCities.slice(
      currentPage * citiesPerPage,
      currentPage * citiesPerPage + citiesPerPage,
    )

    return (
      <div className="city-store-container ">
        <div className="city-store">
          <div className="badge-main-container">
            <div className="search-input-container">
              <img
                src={SEARCH_ICON_URL}
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="What you want"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <ul className="tabs-list" id="citiesSection">
            <button
              type="button"
              className="custom-outline-btn mr-2 mb-2"
              onClick={() => this.handlePageChange('prev')}
              disabled={currentPage === 0}
            >
              Prev
            </button>
            {tabsList
              .slice(currentPage * 3, currentPage * 3 + 3)
              .map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  setActiveTabId={this.setActiveTabId}
                  isActive={activeTabId === eachTab.tabId}
                />
              ))}
            <button
              className="custom-outline-btn ml-2 mb-2"
              onClick={() => this.handlePageChange('next')}
              disabled={currentPage === this.totalPages() - 1}
              type="button"
            >
              Next
            </button>
          </ul>

          <div className="container">
            <div className="row">
              <ul className="cities-list">
                {activeTabCities.map(eachCity => (
                  <CityItem key={eachCity.cityId} cityDetails={eachCity} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppStore
