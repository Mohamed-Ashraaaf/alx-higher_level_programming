#!/bin/bash
# The script takes in a URL, sends a GET request with a custom header, and displays the body of the response
curl -s -H "X-School-User-Id: 98" "$1"
