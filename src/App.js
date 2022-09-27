import './App.css';
import './Custom.css';
import './style.css';
import axios from 'axios';
import Countdata from './Components/Count'
import Sum from './Components/Sum'
import { BrowserRouter as Router, Route } from "react-router-dom";
// parent to child and child to parent 
import Countprops_result from './Components/Countprops_result';
// Axios fetch dynamic data process\
import DynamicefetchData from './AxiosFetchDataDynamice/Dynamicfetchdata'
// controlled and uncontrolled component
import ContrlledUncontrolled from './Controlled_Uncontrolled_Component/Controlled'
//dynamic data get, put, post and delete in react js
import Usergetmethod from './DataGet_Post_Put_Delete/UserGetmethod'
//dynamic post data react js
import UserPostmethod from './DataGet_Post_Put_Delete/UserPostmethod';
// current location in folder using react.js
import CurrentLocation from './Components/UseLocation';
// current date and time in react.js
import CurrentDateTime from './Components/CurrentDateTime'
// use to promis and await in react.js
import Promissmethod from './Promis_await/Promisprocess';
// use to pure component in using react.js
import Pure_component from './UseMemo_and_Pure_Component/Use_pure_component';
// fetch api and axio api call
import FetchApi from './Fetch_Axios_API/Fetch_api'
import AxiosApi from './Fetch_Axios_API/Axios_api'

// use to link a page
import LinkMenu from './Link_Contain/LinkMenu';
import Promisprocess from './Promis_await/Promisprocess';
// useState update name
import UseStateUpdateName from './Components/UseState_UpdateName'

// use toggle in react.js
import ToggleData from './Components/ToggleData';

import MapFunction from './Map_Function/Testnested_page'
import ContextApiDemo from './Components/ContextApiDemo';
import Validationpage from './ValidationForm/Validationpage';
import ValidationHook from './ValidationForm/ValidationHookForm'
import ParentPage from './Props_State/ParentPage';
import ChieldPage from './Props_State/ChieldPage';
import Use_Location from './Use_Location/UseLocationPage';
import UseCallbackPage from './UseCallback/UseCallbackPage';
// useReducer

import useReducerPage from './useReducer/useReducerPage';

import ExpotPdfData from './Export_PDF_Data/ExportPdfDataPage'
import DisplayPDF from './Export_PDF_Data/DisplayPDF_FILE'
import PaginationPage from './React_Pagination/PaginationPage'
import PaginationSecondPage from './React_Pagination/PaginationsecondPage'
import PaginationThirdPage from './React_Pagination/PaginationThirdPage'
//import PaginationFourthPage from './Components/React_Pagination/PaginationFourthPage'


function App(props) {
  return (
    <div className="App">
     {/* <Countdata/> */}
     {/* <Countprops_result/> */}
     {/* <Sum/> */}
     {/* <DynamicefetchData/> */}
     {/* <ContrlledUncontrolled/> */}
     {/* <Usergetmethod/>
     <UserPostmethod/> */}
     {/* <CurrentLocation/> */}
     {/* <CurrentDateTime/> */}
     {/* <Promissmethod/> */}
     {/* <Pure_component/> */}
     <Router>
       <Route
         path="/Pure_component"
         component={Pure_component}
         exact
         strict
       />
      <Route
         path="/FetchApi"
         component={FetchApi}
         exact
         strict
         history={props.history}
       />
      <Route
         path="/AxiosApi"
         component={AxiosApi}
         exact
         strict
         history={props.history}
       />
       <Route
        path="/LinkMenu"
        strict
        exact
        component={LinkMenu}
        history={props.history}
       />
      <Route
        path='/UseStateUpdateName'
        strict
        exact
        component={UseStateUpdateName}
        history={props.history}
      /> 
      <Route
        path='/ToggleData'
        component={ToggleData}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/MapFunction'
        component={MapFunction}
        exact
        strict
        history={props.history}
      />

       <Route
        path='/ContextApiDemo'
        component={ContextApiDemo}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/Validationpage'
        component={Validationpage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/ValidationHook'
        component={ValidationHook}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/ParentPage'
        component={ParentPage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/ChieldPage'
        component={ChieldPage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/Use_Location'
        component={Use_Location}
        exact
        strict
        history={props.history}
      />

     <Route
        path='/UseCallbackPage'
        component={UseCallbackPage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/useReducerPage'
        component={useReducerPage}
        exact
        strict
        history={props.history}
      />

       <Route
        path='/ExpotPdfData'
        component={ExpotPdfData}
        exact
        strict
        history={props.history}
      />
       <Route
        path='/DisplayPDF'
        component={DisplayPDF}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/PaginationPage'
        component={PaginationPage}
        exact
        strict
        history={props.history}
      />

    <Route
        path='/PaginationSecondPage'
        component={PaginationSecondPage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/PaginationThirdPage'
        component={PaginationThirdPage}
        exact
        strict
        history={props.history}
      /> 
      
      {/* <Route
        path='/PaginationFourthPage'
        component={PaginationFourthPage
}
        exact
        strict
        history={props.history}
      /> */}

     </Router>
    </div>
  );
}

export default App;
