import sys
import os
from PIL import Image

def remove_background_simple(input_path, tolerance=30):
    try:
        if not os.path.exists(input_path):
            print(f"Error: File not found - {input_path}")
            return

        print(f"Processing: {input_path}")
        
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        # Assume top-left pixel is background color
        bg_color = datas[0]
        
        new_data = []
        for item in datas:
            # simple euclidean distance for color difference
            if all(abs(item[i] - bg_color[i]) < tolerance for i in range(3)):
                new_data.append((255, 255, 255, 0)) # Transparent
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(input_path, "PNG")
        print(f"Successfully processed: {input_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python remove_bg.py <image_path1> <image_path2> ...")
        sys.exit(1)

    for file_path in sys.argv[1:]:
        remove_background_simple(file_path)
