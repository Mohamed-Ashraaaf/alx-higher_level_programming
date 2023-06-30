#!/bin/bash
# Script that causes the server to respond with a message You got me!
curl -sL -X POST 0.0.0.0:5000/catch_me
