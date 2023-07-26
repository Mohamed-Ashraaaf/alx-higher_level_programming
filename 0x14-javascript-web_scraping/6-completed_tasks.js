#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    return;
  }

  const tasks = JSON.parse(body);

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.completed) {
      acc[task.userId] = (acc[task.userId] || 0) + 1;
    }
    return acc;
  }, {});

  console.log(JSON.stringify(completedTasks));
});