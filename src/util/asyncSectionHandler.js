import loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingPage/LoadingPage';

// Asynchronous sections
export const AsyncLanding = loadable({
  loader: () => import('../sections/Landing/Landing'),
  loading: LoadingComponent,
  delay: 300,
  timeout: 10000
});

export const AsyncAbout = loadable({
  loader: () => import('../sections/About/About'),
  loading: LoadingComponent,
  delay: 300,
  timeout: 10000
});
