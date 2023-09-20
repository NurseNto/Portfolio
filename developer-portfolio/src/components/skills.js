import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div className="container">
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 h-full grid">
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 imge mx-auto" src="/images/html.png" alt="HTML icon" />
        <p className="my-4">HTML</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto imge" src="/images/css.png" alt="CSS icon" />
        <p className="my-4">CSS</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto imge" src="/images/javascript.png" alt="JavaScript icon" />
        <p className="my-4">JavaScript</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto imge" src="/images/react.png" alt="React icon" />
        <p className="my-4">React</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto imge" src="/images/nodejs.png" alt="Node icon" />
        <p className="my-4">Node Js</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto imge" src="/images/angular.png" alt="FireBase icon" />
        <p className="my-4">Angular</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src="/images/postgresql.png" alt="Mongo icon" />
        <p className="my-4">PostgreSQL</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src="/images/github.png" alt="GitHub icon" />
        <p className="my-4">GitHub</p>
      </div>
    </div>
    </div>
  );
}

export default Skills;
