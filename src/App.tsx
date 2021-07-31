import { GlobalStyles } from './assets/GlobalStyle';
import { ListCard } from './components/ListCard/index';

const IMAGE_LOGO = 'https://rajgaurav99.github.io/PokeCards-WEB/images/banner.png'
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <div style={style}>
        <img src={IMAGE_LOGO} alt={IMAGE_LOGO} style={{ height: '60px' }} />
      </div>
      <ListCard />
    </>
  );
}

export default App;

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '80px',
  boxShadow: '0 0px 14px rgb(0, 0, 0, .2)',
  marginBottom: '20px'
}