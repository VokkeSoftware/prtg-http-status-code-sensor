# prtg-http-status-code-sensor
Custom PRTG sensor to check HTTP status response codes

**About this checker**
This checker is a Node.js project bundled as a PE/exe file through Pkg. If you don't like the idea of downloading a binary from Git, you can run the Pkg command yourself.

**How to use**

You can check the status code by doing this

check-status-code.exe --url=www.vokke.com.au --expectedStatusCode=401

**Building the sensor**
If you wish to build the sensor run Pkg:

pkg . --targets node10-win-x64
