import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


// coreiu below just for reference
const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// core ui above just for reference
//live channels
const channelslist = React.lazy(() => import('./views/ourmedia/livechannels/channellist'));
const addchannel = React.lazy(() => import('./views/ourmedia/livechannels/addchannel'));
// movies
const movielist = React.lazy(() => import('./views/ourmedia/movies/movielist'));
const addmovie = React.lazy(() => import('./views/ourmedia/movies/addmovie'));
// drama
const adddrama = React.lazy(() => import('./views/ourmedia/drama/adddrama'));
const dramalist= React.lazy(() => import('./views/ourmedia/drama/dramalist'));



const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    //channels
    { path: '/channelslist', name: 'channelslist', component: channelslist },
    { path: '/addchannel', name: 'addchannel', component: addchannel },
  // movies
    { path: '/movielist', name: 'movielist', component: movielist},
    { path: '/addmovie', name: 'addmovie', component: addmovie },
    //drama
    { path: '/adddrama', name: 'adddrama', component: adddrama},
    { path: '/dramalist', name: 'dramalist', component: dramalist},
    //forms
    { path: '/forms', name: 'dramalist', component: Forms},

];

export default routes;
