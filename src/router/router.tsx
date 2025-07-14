import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import App from '../App';
import Home from '../pages/Home';
import CharacterPage from '../pages/CharacterPage';

const rootRoute = createRootRoute({ component: App });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const characterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character/$id',
  component: CharacterPage,
});

const routeTree = rootRoute.addChildren([homeRoute, characterRoute]);

export const router = createRouter({ routeTree });
 