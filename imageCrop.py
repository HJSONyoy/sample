import sys, os
import cv2

mouse_is_pressing = False
start_x, starty = -1, -1
my_path = ''

def mouse_callback(event, x, y, flags, param):
    img_color = param[0]
    file_name = param[1]
    
    global start_x, start_y,mouse_is_pressing

    img_result = img_color.copy()

    if event == cv2.EVENT_LBUTTONDOWN:
        mouse_is_pressing = True
        start_x, start_y = x, y

        cv2.circle(img_result, (x,y), 10, (0, 255, 0), -1)

        cv2.imshow(file_name, img_result)

    elif event == cv2.EVENT_MOUSEMOVE:
        if mouse_is_pressing:
            cv2.rectangle(img_result, (start_x, start_y), (x, y), (0, 255, 0), 3)

            cv2.imshow(file_name, img_result)

    elif event == cv2.EVENT_LBUTTONUP:
        mouse_is_pressing = False
        img_cropped = img_color[start_y:y, start_x:x]
        # img_cropped = cv2.cvtColor(img_cropped, cv2.COLOR_BGR2GRAY);
        # img_cropped = cv2.cvtColor(img_cropped, cv2.COLOR_GRAY2BGR);


        img_result[start_y:y, start_x:x] = img_cropped
        cv2.imshow(file_name, img_result)
        cv2.imshow("img_cropped", img_cropped)

        os.remove(param[2])
        cv2.imwrite(my_path + '/' + file_name+'.jpg',img_cropped);


# cv2.setMouseCallback('img_color', mouse_callback)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

if __name__ == "__main__" :
    my_path = sys.argv[1]
    print(my_path)
    file_list = os.listdir(my_path)
    file_list_jpg = [file for file in file_list if file.endswith(".jpg")]

    print ("file_list: {}".format(file_list_jpg))

    for f in file_list_jpg:
        full_path = my_path + '/' + f; 
        print(full_path)
        file_name = f.split('.')[0]
        print(file_name)
        img_color = cv2.imread(full_path,cv2.IMREAD_COLOR);
        cv2.imshow(file_name,img_color)
        cv2.setMouseCallback(file_name, mouse_callback, (img_color,file_name,full_path))
        cv2.waitKey(0)

        cv2.destroyAllWindows()

