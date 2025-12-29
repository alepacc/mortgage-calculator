import Form from './components/Form';
import Result from './components/Result'

import { useState } from 'react';
import type { MortgageResult } from './types/mortgage';

function App() {
  const [result, setResult] = useState<MortgageResult | null>(null);

  return (
    <>
      <div className='container'>
        <main>
          <Form setResult={setResult} />
          <Result result={result} />
        </main>
      </div>
    </>
  );

   
}

export default App;
