#!/usr/bin/python3
"""
Python script that takes your GitHub credentials (username and password) and
uses the GitHub API to display your id.
"""
import requests
import sys

def get_github_user_id(username, password):
    url = "https://api.github.com/user"
    response = requests.get(url, auth=(username, password))

    if response.status_code == 200:
        data = response.json()
        return data["id"]
    else:
        return "Error code: {}".format(response.status_code)

if __name__ == "__main__":
    username = sys.argv[1]
    password = sys.argv[2]

    user_id = get_github_user_id(username, password)
    print(user_id)
