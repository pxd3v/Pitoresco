import React from 'react';
import { View,
  Text, 
  StyleSheet, 
  ImageBackground
} from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const Info = () => {
  return (
    <View style={styles.container}>
      <Svg width="225" height="157" viewBox="0 0 225 157" fill="none" >
      <Path d="M12.3587 85.1C14.702 85.1 16.737 85.4947 18.4637 86.284C20.1904 87.0487 21.5224 88.1587 22.4597 89.614C23.397 91.0447 23.8657 92.7343 23.8657 94.683C23.8657 96.6317 23.397 98.3213 22.4597 99.752C21.5224 101.183 20.1904 102.293 18.4637 103.082C16.737 103.847 14.702 104.229 12.3587 104.229H7.84471V111H0.518711V85.1H12.3587ZM11.9147 98.457C13.4194 98.457 14.554 98.1363 15.3187 97.495C16.0834 96.829 16.4657 95.8917 16.4657 94.683C16.4657 93.4743 16.0834 92.537 15.3187 91.871C14.554 91.205 13.4194 90.872 11.9147 90.872H7.84471V98.457H11.9147ZM27.4377 85.1H34.7637V111H27.4377V85.1ZM45.4887 90.909H37.5337V85.1H60.7327V90.909H52.8147V111H45.4887V90.909ZM76.1617 111.518C73.4237 111.518 70.9571 110.938 68.7617 109.779C66.5911 108.62 64.8767 107.016 63.6187 104.969C62.3854 102.922 61.7687 100.615 61.7687 98.05C61.7687 95.4847 62.3854 93.1783 63.6187 91.131C64.8767 89.0837 66.5911 87.4803 68.7617 86.321C70.9571 85.1617 73.4237 84.582 76.1617 84.582C78.8997 84.582 81.3541 85.1617 83.5247 86.321C85.7201 87.4803 87.4344 89.0837 88.6677 91.131C89.9257 93.1783 90.5547 95.4847 90.5547 98.05C90.5547 100.615 89.9257 102.922 88.6677 104.969C87.4344 107.016 85.7201 108.62 83.5247 109.779C81.3541 110.938 78.8997 111.518 76.1617 111.518ZM76.1617 105.45C77.4691 105.45 78.6531 105.142 79.7137 104.525C80.7744 103.908 81.6131 103.045 82.2297 101.935C82.8464 100.8 83.1547 99.5053 83.1547 98.05C83.1547 96.5947 82.8464 95.312 82.2297 94.202C81.6131 93.0673 80.7744 92.1917 79.7137 91.575C78.6531 90.9583 77.4691 90.65 76.1617 90.65C74.8544 90.65 73.6704 90.9583 72.6097 91.575C71.5491 92.1917 70.7104 93.0673 70.0937 94.202C69.4771 95.312 69.1687 96.5947 69.1687 98.05C69.1687 99.5053 69.4771 100.8 70.0937 101.935C70.7104 103.045 71.5491 103.908 72.6097 104.525C73.6704 105.142 74.8544 105.45 76.1617 105.45ZM105.714 104.118H101.718V111H94.3918V85.1H106.232C108.575 85.1 110.61 85.4947 112.337 86.284C114.063 87.0487 115.395 88.1587 116.333 89.614C117.27 91.0447 117.739 92.7343 117.739 94.683C117.739 96.5577 117.295 98.198 116.407 99.604C115.543 100.985 114.298 102.071 112.67 102.86L118.257 111H110.413L105.714 104.118ZM110.339 94.683C110.339 93.4743 109.956 92.537 109.192 91.871C108.427 91.205 107.292 90.872 105.788 90.872H101.718V98.457H105.788C107.292 98.457 108.427 98.1363 109.192 97.495C109.956 96.829 110.339 95.8917 110.339 94.683ZM142.574 105.339V111H121.78V85.1H142.093V90.761H129.032V95.127H140.539V100.603H129.032V105.339H142.574ZM155.742 111.518C153.645 111.518 151.61 111.259 149.637 110.741C147.663 110.223 146.06 109.532 144.827 108.669L147.232 103.267C148.391 104.032 149.735 104.648 151.265 105.117C152.794 105.586 154.299 105.82 155.779 105.82C158.591 105.82 159.997 105.117 159.997 103.711C159.997 102.971 159.59 102.428 158.776 102.083C157.986 101.713 156.704 101.331 154.928 100.936C152.979 100.517 151.351 100.073 150.044 99.604C148.736 99.1107 147.614 98.3337 146.677 97.273C145.739 96.2123 145.271 94.7817 145.271 92.981C145.271 91.4023 145.702 89.984 146.566 88.726C147.429 87.4433 148.712 86.432 150.414 85.692C152.14 84.952 154.249 84.582 156.741 84.582C158.443 84.582 160.12 84.7793 161.773 85.174C163.425 85.544 164.881 86.099 166.139 86.839L163.882 92.278C161.415 90.946 159.022 90.28 156.704 90.28C155.248 90.28 154.188 90.502 153.522 90.946C152.856 91.3653 152.523 91.9203 152.523 92.611C152.523 93.3017 152.917 93.8197 153.707 94.165C154.496 94.5103 155.766 94.868 157.518 95.238C159.491 95.6573 161.119 96.1137 162.402 96.607C163.709 97.0757 164.831 97.8403 165.769 98.901C166.731 99.937 167.212 101.355 167.212 103.156C167.212 104.71 166.78 106.116 165.917 107.374C165.053 108.632 163.758 109.643 162.032 110.408C160.305 111.148 158.208 111.518 155.742 111.518ZM183.509 111.518C180.796 111.518 178.354 110.951 176.183 109.816C174.037 108.657 172.347 107.053 171.114 105.006C169.881 102.959 169.264 100.64 169.264 98.05C169.264 95.46 169.881 93.1413 171.114 91.094C172.347 89.0467 174.037 87.4557 176.183 86.321C178.354 85.1617 180.796 84.582 183.509 84.582C185.877 84.582 188.011 85.0013 189.91 85.84C191.809 86.6787 193.388 87.8873 194.646 89.466L189.984 93.684C188.307 91.6613 186.272 90.65 183.879 90.65C182.473 90.65 181.215 90.9583 180.105 91.575C179.02 92.1917 178.169 93.0673 177.552 94.202C176.96 95.312 176.664 96.5947 176.664 98.05C176.664 99.5053 176.96 100.8 177.552 101.935C178.169 103.045 179.02 103.908 180.105 104.525C181.215 105.142 182.473 105.45 183.879 105.45C186.272 105.45 188.307 104.439 189.984 102.416L194.646 106.634C193.388 108.213 191.809 109.421 189.91 110.26C188.011 111.099 185.877 111.518 183.509 111.518ZM210.431 111.518C207.693 111.518 205.227 110.938 203.031 109.779C200.861 108.62 199.146 107.016 197.888 104.969C196.655 102.922 196.038 100.615 196.038 98.05C196.038 95.4847 196.655 93.1783 197.888 91.131C199.146 89.0837 200.861 87.4803 203.031 86.321C205.227 85.1617 207.693 84.582 210.431 84.582C213.169 84.582 215.624 85.1617 217.794 86.321C219.99 87.4803 221.704 89.0837 222.937 91.131C224.195 93.1783 224.824 95.4847 224.824 98.05C224.824 100.615 224.195 102.922 222.937 104.969C221.704 107.016 219.99 108.62 217.794 109.779C215.624 110.938 213.169 111.518 210.431 111.518ZM210.431 105.45C211.739 105.45 212.923 105.142 213.983 104.525C215.044 103.908 215.883 103.045 216.499 101.935C217.116 100.8 217.424 99.5053 217.424 98.05C217.424 96.5947 217.116 95.312 216.499 94.202C215.883 93.0673 215.044 92.1917 213.983 91.575C212.923 90.9583 211.739 90.65 210.431 90.65C209.124 90.65 207.94 90.9583 206.879 91.575C205.819 92.1917 204.98 93.0673 204.363 94.202C203.747 95.312 203.438 96.5947 203.438 98.05C203.438 99.5053 203.747 100.8 204.363 101.935C204.98 103.045 205.819 103.908 206.879 104.525C207.94 105.142 209.124 105.45 210.431 105.45ZM37.1361 142.495C38.6161 143.013 39.7755 143.827 40.6141 144.937C41.4528 146.022 41.8721 147.342 41.8721 148.896C41.8721 151.165 40.9595 152.917 39.1341 154.15C37.3088 155.383 34.6695 156 31.2161 156H17.2301V130.1H30.4761C33.7815 130.1 36.2975 130.717 38.0241 131.95C39.7508 133.159 40.6141 134.799 40.6141 136.871C40.6141 138.104 40.3058 139.214 39.6891 140.201C39.0971 141.163 38.2461 141.928 37.1361 142.495ZM24.4821 135.391V140.386H29.5141C31.9808 140.386 33.2141 139.547 33.2141 137.87C33.2141 136.217 31.9808 135.391 29.5141 135.391H24.4821ZM30.6241 150.709C33.1895 150.709 34.4721 149.833 34.4721 148.082C34.4721 146.331 33.1895 145.455 30.6241 145.455H24.4821V150.709H30.6241ZM57.6177 156.518C53.7697 156.518 50.7727 155.47 48.6267 153.373C46.5053 151.276 45.4447 148.304 45.4447 144.456V130.1H52.7707V144.234C52.7707 148.378 54.411 150.45 57.6917 150.45C60.9477 150.45 62.5757 148.378 62.5757 144.234V130.1H69.7907V144.456C69.7907 148.304 68.7177 151.276 66.5717 153.373C64.4503 155.47 61.4657 156.518 57.6177 156.518ZM86.0756 149.118H82.0796V156H74.7536V130.1H86.5936C88.9369 130.1 90.9719 130.495 92.6986 131.284C94.4252 132.049 95.7572 133.159 96.6946 134.614C97.6319 136.045 98.1006 137.734 98.1006 139.683C98.1006 141.558 97.6566 143.198 96.7686 144.604C95.9052 145.985 94.6596 147.071 93.0316 147.86L98.6186 156H90.7746L86.0756 149.118ZM90.7006 139.683C90.7006 138.474 90.3182 137.537 89.5536 136.871C88.7889 136.205 87.6542 135.872 86.1496 135.872H82.0796V143.457H86.1496C87.6542 143.457 88.7889 143.136 89.5536 142.495C90.3182 141.829 90.7006 140.892 90.7006 139.683ZM119.495 142.495H125.97V153.225C124.49 154.286 122.788 155.1 120.864 155.667C118.94 156.234 117.016 156.518 115.092 156.518C112.379 156.518 109.937 155.951 107.766 154.816C105.596 153.657 103.894 152.053 102.66 150.006C101.427 147.959 100.81 145.64 100.81 143.05C100.81 140.46 101.427 138.141 102.66 136.094C103.894 134.047 105.608 132.456 107.803 131.321C109.999 130.162 112.478 129.582 115.24 129.582C117.658 129.582 119.828 129.989 121.752 130.803C123.676 131.617 125.28 132.789 126.562 134.318L121.9 138.536C120.149 136.612 118.052 135.65 115.61 135.65C113.39 135.65 111.602 136.328 110.245 137.685C108.889 139.017 108.21 140.805 108.21 143.05C108.21 144.481 108.519 145.763 109.135 146.898C109.752 148.008 110.615 148.884 111.725 149.525C112.835 150.142 114.106 150.45 115.536 150.45C116.942 150.45 118.262 150.166 119.495 149.599V142.495ZM142.566 156.518C138.718 156.518 135.721 155.47 133.575 153.373C131.454 151.276 130.393 148.304 130.393 144.456V130.1H137.719V144.234C137.719 148.378 139.359 150.45 142.64 150.45C145.896 150.45 147.524 148.378 147.524 144.234V130.1H154.739V144.456C154.739 148.304 153.666 151.276 151.52 153.373C149.399 155.47 146.414 156.518 142.566 156.518ZM180.496 150.339V156H159.702V130.1H180.015V135.761H166.954V140.127H178.461V145.603H166.954V150.339H180.496ZM195.883 149.118H191.887V156H184.561V130.1H196.401C198.745 130.1 200.78 130.495 202.506 131.284C204.233 132.049 205.565 133.159 206.502 134.614C207.44 136.045 207.908 137.734 207.908 139.683C207.908 141.558 207.464 143.198 206.576 144.604C205.713 145.985 204.467 147.071 202.839 147.86L208.426 156H200.582L195.883 149.118ZM200.508 139.683C200.508 138.474 200.126 137.537 199.361 136.871C198.597 136.205 197.462 135.872 195.957 135.872H191.887V143.457H195.957C197.462 143.457 198.597 143.136 199.361 142.495C200.126 141.829 200.508 140.892 200.508 139.683Z" fill="#ECB243"/>
      <G clip-path="url(#clip0)">
      <Path d="M142.043 53.4526C142.043 53.4526 100.968 52.4493 82.5372 53.4526C64.1064 54.456 62 68.0011 62 68.0011H161C154.154 52.9509 142.043 53.4526 142.043 53.4526ZM75.2702 62.8841C73.8484 63.4861 72.5846 63.0847 71.5314 62.0312C72.2686 59.2218 74.2697 60.1249 76.1128 60.6265C76.534 61.6299 76.3234 62.4827 75.2702 62.8841ZM76.5867 58.5195C76.534 56.563 78.4298 56.1115 80.0096 56.2118C81.4314 56.3121 83.6431 56.262 83.5378 58.2687C83.4851 60.0747 81.5367 60.3255 79.9569 60.5764C78.4824 60.3757 76.6394 60.3757 76.5867 58.5195ZM84.2223 63.5864C83.6957 63.5864 83.1692 63.5864 82.6426 63.5362C82.116 63.1349 81.484 62.8339 81.3787 62.1315C81.958 61.3289 82.7479 60.8272 83.7484 60.777C84.8016 60.7269 86.0128 60.6265 86.0654 62.0814C86.2234 63.2854 85.2755 63.5362 84.2223 63.5864Z" fill="#ECB243"/>
      </G>
      <Path d="M54.8397 63.6167C54.8397 63.6167 42.3347 42.1667 69.8078 31.35C69.8078 31.35 65.6394 39.4167 74.9234 39.6C84.2074 39.7833 76.8181 31.9 79.8496 20.35C82.8811 8.8 104.291 0.733333 110.923 0C110.923 0 96.144 14.1167 105.049 22.1833C113.954 30.25 123.238 23.65 121.722 17.4167C120.207 11.1833 117.175 9.71667 117.175 9.71667C117.175 9.71667 135.933 15.2167 139.154 28.2333C139.154 28.2333 139.343 29.15 136.501 31.7167C133.659 34.2833 129.87 39.4167 135.933 41.6167C141.958 43.7983 152.795 44.9167 152.871 42.0567C152.871 41.9833 152.947 41.9467 152.909 41.8733C152.416 41.0117 149.233 35.3467 149.934 32.6333C150.692 29.7 153.724 25.4833 159.218 24.3833C159.218 24.3833 155.618 30.25 157.324 31.7167C159.029 33.1833 173.239 46.0167 171.913 52.9833C170.586 59.95 171.155 60.5 165.281 66C165.281 66 166.039 48.5833 138.756 46.2H76.2497C76.2497 46.2 60.7132 48.95 56.3554 65.2667L54.8397 63.6167Z" fill="#ECB243"/>
      <Defs>
      <ClipPath id="clip0">
      <Rect width="99" height="15" fill="white" transform="translate(62 53)"/>
      </ClipPath>
      </Defs>
      </Svg>
    </View>
  )
}
export default Info;
