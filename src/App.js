import React from 'react';
import users from './data.json';

const App = () => {
  const usersJSX = users.map((user, index) => {
    return (
      <tr key={`users-${index}`}>
        {/* 
          вместо этого комментария создать 4 ячейки td и разместить в них нужные данные 
          1. Имя
          2. Никнейм (username)
          3. Емейл
          4. Вебсайт (вебсайт нужно сделать в виде ссылки)
        */}
      </tr>
    )
  });

  return (
    <div className="jumbotron">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {/*Убрать эту строчку и вместо неё вставить usersJSX */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
