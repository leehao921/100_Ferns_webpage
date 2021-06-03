import json
from json import encoder

filename = 'FernsJson.json'
plant_nameC = " "
plant_nameE = " "
Description = " "


def update(new_data):
    with open(filename, 'r+') as file:
        file_data = json.load(file)
        file_data.update(new_data)
        file.seek(0)
        json.dump(new_data, file, ensure_ascii=False)
        file.truncate()


def PrintFile():
    with open(filename, 'r', encoding='utf-8') as readfile:
        data = readfile.read().decode(encoding='gbk').encode(encoding='utf-8')
        print(data)
        result = json.loads(data)
        new_result = json.dumps(result, ensure_ascii=False)
        print(new_result)


times = int(input())
for i in range(times):
    print("中文名")
    plant_nameC = input()
    print("學名")
    plant_nameE = input()
    print("介紹")
    Description = input()
    _dict = {
        "plant_name": plant_nameC,
        "sci_name": plant_nameE,
        "descibe": Description
    }
    print("now file: ")
    print(_dict)
    # with open(filename, 'w', encoding='utf-8')as f:
    #    json.dump(['plant'], f, ensure_ascii=False)

    # update(_dict)

    with open(filename, 'r+') as file:
        file_data = json.load(file)
        file_data.append(_dict)
        file.seek(0)
        json.dump(_dict, file, ensure_ascii=False)
        file.truncate()
        file.close()


# PrintFile()
