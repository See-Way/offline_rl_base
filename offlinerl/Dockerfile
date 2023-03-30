FROM pytorch/pytorch:1.13.1-cuda11.6-cudnn8-devel

WORKDIR /app

ADD . /app
ADD .mujoco /root/

RUN sed -i 's#http://archive.ubuntu.com/#http://mirrors.tuna.tsinghua.edu.cn/#' /etc/apt/sources.list;
RUN apt-get update
RUN apt-get -y install python3-dev

RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
RUN cd neorl && pip install -e . -i https://pypi.tuna.tsinghua.edu.cn/simple
RUN cd - 
RUN pip install -e . -i https://pypi.tuna.tsinghua.edu.cn/simple
# RUN apt-get -y install libglew-dev
RUN pip install mujoco_py==2.0.2.8 -i https://pypi.tuna.tsinghua.edu.cn/simple
RUN apt install -y libosmesa6-dev && apt-get -y install patchelf
RUN export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/root/.mujoco/mujoco200/bin


CMD ["export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/root/.mujoco/mujoco200/bin"]
