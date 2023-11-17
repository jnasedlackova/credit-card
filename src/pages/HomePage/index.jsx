import CreditCard from '../../components/CreditCard';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h2>Zadejte číslo kreditní karty</h2>
      </header>
      <main>
        <CreditCard />
      </main>
    </div>
  );
};
