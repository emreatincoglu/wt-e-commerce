import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';



function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
  
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </main>
    
    </div>
  );
}

export default App;
