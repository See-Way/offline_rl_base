# offline_rl_base

1 使用`docker build -t name .`创建镜像

2 创建完成后，使用`docker run -i -t name /bin/bash`启动镜像

3 在镜像中需要通过以下三行命令重新安装设置`mujoco_py`库

`pip uninstall mujoco_py`

`pip install mujoco_py==2.0.2.8 -i https://pypi.tuna.tsinghua.edu.cn/simple`

`export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/root/.mujoco/mujoco200/bin`

4 修改引用`Iterator`的方式

`vim /opt/conda/lib/python3.10/site-packages/aimrecords/artifact_storage/storage.py`

将第三行修改为`from collections.abc import Iterator`