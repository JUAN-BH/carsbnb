import React from 'react';
import google from './imgs/googleApp.svg';
import ios from './imgs/appleStore.svg';

export default function OurApp() {
  return (
    <div className="appBg softW">
      <section className="ourApp marginContainer">
        <div className="ourApp__con">
          <article className="ourApp__con__intro">
            <h1>Download our app to get most out of it</h1>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
          </article>
          <article className="ourApp__con__appsBtn">
            <div className="ourApp__con__appsBtn__appBtn">
              <img src={google} alt="Google play" />
            </div>
            <div className="ourApp__con__appsBtn__appBtn">
              <img src={ios} alt="App store" />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
