+++
title = "Set up a clean Coding Environment on Windows"
date = "2023-01-14T14:55:06+01:00"
author = "Niklas Petersen"
authorTwitter = "killerplauze1" #do not include @
cover = "img/2023-01-14-clean-windows-environment/cover.png"
description = "I talk about how to create a clean conding environment on Windows using the wsl in vscode."
tags = ["DevOps", "Python", "Linux"]
keywords = ["python", "windows", "wsl", "venv", "linux", "ubuntu", "vscode"]
showFullContent = false
readingTime = true
hideComments = false
+++

Since working full-time on a mac, I do not want to miss out on being able to use linux commands on my personal machine.
This is why I wanted to create the most reliable development environment that allows me to write code on my Windows machine just like I couly on any other one.

If you are like me and you do not want to use powershell or have to find workarounds for the installation of various libraries and packages that only occur on windows, then this short step by step guide on how to set up your reliable linux-like coding environment might be helpful to you.

For me a clean and reliable coding environment involves the following three things, which is also what will be covered in this article:
- **Windows Subsystem for Linux (WSL)** in order to make use of the power of Linux and Bash and not having to find workaround for your stuff to work on Windows
- **Using VSCode as an IDE in your WSL** to be able to use my favorite IDE, while being able to execute bash commands in a clean Linux environment
- **Setting up Python and Virtual Environments** for clean project environments

### Installing Windows Subsystem for Linux (WSL)
First of all we need to install the official Windows Subsystem for Linux (WSL) on your machine.
For this simply open the Windows PowerShell as an administrator and type 
```bash
wsl --install
```
In case you want a linux distribution other than Ubuntu you can specify it using the `-d <DistributionName>` flag.

Now that we have a linux distribution on our system, we can jump right into it and get familiar with our new ability to write bash commands.
You should be able to open a newly installed Ubuntu-Application from the Windows start-menu. After starting it we are prompted to configure a username and a password.
After doing so we are already all set to make use of the distro. 

Remember keep your distribution and packages up to date using 
```bash
sudo apt update && sudo apt upgrade
```

### Using VSCode as an IDE in your WSL
To get VSCode set up to work with your linux distribution we first need to [install VSCode](https://code.visualstudio.com/) on Windows (not in WSL).
Note: When prompted to Select Additional Tasks during installation, be sure to check the Add to PATH option so you can easily open a folder in WSL using the code command.

Next it is necessary to install the [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) for vscode.

To see if we did everything correctly, we can open up the Ubuntu terminal and try typing:
```bash
code .
```
This should open up VSCode with an indication in the bottom left corner that VSCode is running in our WSL.

{{< image src="/img/2023-01-14-clean-windows-environment/wsl-in-vscode.png" alt="WSL in VSCode" position="center" style="border-radius: 8px;" >}}

If you do not see this you might need to restart your terminal or check if VSCode has been added to PATH during the installation.

### Setting up Python and Virtual Environments
Great, now we are almost ready to start coding. Ubuntu already comes with Python pre-installed so we don't have to worry about that (check your Python version by typing the following into the terminal):
```bash
python3 --version
``` 

If you haven't done so - update your system using `sudo apt update && sudo apt upgrade` and naviagte to the folder where you are planning to store your coding projects and virtual environments.

Note: for VSCode and your WSL to work faster within these folders it is recommended to create these whithin the WSL (e.g. `~/home`). VSCode will also warn you about this:

{{< image src="/img/2023-01-14-clean-windows-environment/wsl-in-vscode2.png" alt="WSL in VSCode mnt" position="center" style="border-radius: 8px;" >}}

Now as an icing on the cake virtual environments allow us to establish clean, independable projects environments with their own specific packages and versions, without messing with other projects and their own dependencies. 

First let's install the venv module:
```bash
sudo apt install python3-venv
```

Now to create a virtual environment for a new project we just need to type the following into the terminal:
```bash
python3 -m venv .venv
```
This which will store all the environment dependencies in the .venv folder.

Let's activate the virtual environment.
```bash
source .venv/bin/activate
```

Whether this was successful or not is indicated by an addition to our shell-prompt, which in our case is `(.venv)` before the usual ` user@user:~/path/to/your/directory$`.

Now let's make use of a simple example to show how we use this virtual environment.

We first install the numpy package with `pip install numpy` in our virtual environment.

And test the installation with a simple in-line python command:
```bash
python -c "import numpy as np"
```

If this gives us no error, then we did everything correctly.

Now we can simply create a file in our project root folder (call it `test.py` or whatever) and type a simple dummy script in there:

```python
import numpy as np
print(np.array([i for i in range(1000)]))
```

Run this program ...
```bash
python test.py
```
and enjoy having successfully set up a clean development environment for yourself on your Windows machine. :)

If your done working on your project remember to deactivate your virtual environment with
```bash
deactivate
```

https://linuxize.com/post/how-to-create-python-virtual-environments-on-ubuntu-18-04/
https://thecodeblogger.com/2020/09/24/wsl-setup-vs-code-for-python-development/
https://code.visualstudio.com/docs/remote/wsl
