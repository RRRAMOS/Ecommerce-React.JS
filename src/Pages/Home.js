import {lazy, Suspense} from 'react';

const Banner = lazy (() => import ('../code-splitting/banner'));
const Footer = lazy (() => import ('../code-splitting/footer'));
const Slogan = lazy (() => import ('../code-splitting/slogan'));

export default function Home() {
  return (  
  <div className="container">
    
      
    <Suspense fallback={ 
        <div>
        <h5 class="text-center -mt-5">carregando Banner...</h5>
        </div>}>
       <Banner/>
    </Suspense>

    <Suspense fallback={ 
        <div>
        <h5 class="text-center -mt-5">carregando Slogan...</h5>
        </div>}>
       <Slogan/>
    </Suspense>

    <Suspense fallback={ 
       <div>
        <h5 class="text-center -mt-5">carregando Rodapé...</h5>
        </div>}>
       <Footer/>
    </Suspense>
    </div>
  )
}