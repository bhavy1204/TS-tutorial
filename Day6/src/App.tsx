import './App.css'
import Button from './components/common/Button.tsx'
import User from './components/common/User.tsx';
import Card from './components/product/Product.tsx'
import ProductCard from './components/product/ProductCard.tsx'

function App() {

  return (
    <>
      <ProductCard name="ashish" price={200} />
      <ProductCard name="ashish" price={200} discount={300} />
      <Button text="Hello" color="red" />
      <Button text="Hello" size="large" color="red" />
      <Card>
        <h1>Hello</h1>
        <ProductCard name="ashish" price={200} discount={300} />
      </Card>

      <User/>
    </>
  );
}

export default App


// The important ones:

// React.ChangeEvent<HTMLInputElement>
// React.FormEvent<HTMLFormElement>
// React.MouseEvent<HTMLButtonElement>
// React.KeyboardEvent<HTMLInputElement>

// The pattern is basically:

// React.EventType<HTMLElement>
