import dynamic from 'next/dynamic';

export default dynamic(() => import(/* webpackChunkName: "home" */ './Homepage'));
