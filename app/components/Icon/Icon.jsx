import React from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Symbol,
} from "react-native-svg";

export const Logo = ({ width = 100, height = 100 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.277 12.7603C70.726 12.694 69.1781 12.7418 67.6302 12.8854C64.9618 13.134 62.3845 13.8087 59.8211 14.542C56.2762 15.5518 52.7744 16.6866 49.5166 18.4436C48.16 19.1754 46.8822 20.0138 45.8667 21.201C45.6984 21.3971 45.5981 21.6086 45.5549 21.8665C45.1784 24.1778 44.7231 26.4751 44.2678 28.7741C43.9823 30.213 43.6983 31.652 43.4329 33.0924C43.3125 33.7378 43.206 34.3847 43.098 35.0332L43.0208 35.4994L43.1644 35.5859C43.186 35.5535 43.206 35.5195 43.2261 35.484C43.2739 35.4022 43.3233 35.3188 43.3897 35.2555C46.8575 31.9191 50.691 29.1091 55.0493 27.0263C61.6067 23.8906 68.5006 22.5257 75.7541 22.938C76.1708 22.9611 76.3483 23.0862 76.4671 23.4984C77.6739 27.7118 78.6894 31.9623 79.4472 36.2807C79.5182 36.6883 79.6154 36.923 80.1278 36.9847C82.8193 37.329 85.5077 37.7273 88.1899 38.1288C88.6205 38.1952 88.6838 38.0562 88.6792 37.6733C88.656 34.5329 88.3782 31.4157 87.855 28.3186C86.2454 18.7817 82.523 10.1511 76.751 2.3959C76.4871 2.04233 76.2001 1.87404 75.7741 1.82618C75.1306 1.75516 74.4917 1.65944 73.8512 1.56371C73.6351 1.53129 73.4175 1.49887 73.2015 1.46799L70.7152 1.11443C69.5886 0.955402 68.4497 0.793289 67.2799 0.625C67.3478 0.756235 67.4018 0.867398 67.4512 0.96621C67.5005 1.06502 67.5453 1.15457 67.5901 1.24257C69.4436 4.8384 71.1057 8.52378 72.6197 12.2771C72.7879 12.6893 72.7246 12.7804 72.2801 12.7603H72.2755H72.277ZM22.5089 17.4755C22.8639 16.14 23.2605 14.823 23.8022 13.4644L23.8068 13.4597C19.3606 13.7176 14.9915 14.2255 10.6518 14.9481C10.5916 14.7721 10.6611 14.6578 10.7259 14.5498C10.7444 14.5189 10.7614 14.4896 10.7768 14.4602L11.9898 11.9807C12.7985 10.3271 13.6072 8.67354 14.4113 7.02153C14.5316 6.77296 14.6937 6.64327 14.9483 6.5568C19.2788 5.07308 23.7204 4.07261 28.2808 3.60325C36.4773 2.76026 44.507 3.59862 52.3763 6.03032C52.7837 6.15538 52.8269 6.26963 52.6356 6.65716C51.4102 9.10893 50.2064 11.5684 49.0227 14.0341C48.8499 14.3938 48.6539 14.4648 48.2896 14.4124C43.8974 13.7855 39.4852 13.4119 35.0482 13.2868C34.6979 13.2776 34.5266 13.364 34.3923 13.7083C32.7734 17.8013 31.8489 22.0425 31.5233 26.4288C31.3551 28.7262 31.4616 31.0143 31.6807 33.2993C32.2024 38.6892 33.7734 43.7688 36.1748 48.609C36.1825 48.6245 36.1856 48.6414 36.1933 48.6785C36.201 48.7125 36.2118 48.7649 36.2319 48.8483C35.7025 48.5611 35.1871 48.2832 34.6809 48.0115C33.9386 47.6132 33.2178 47.2256 32.5002 46.8319C31.6066 46.3425 30.7177 45.8438 29.8272 45.3467C27.8811 44.2582 25.935 43.1713 23.9504 42.16C23.7112 42.0349 23.5723 41.8435 23.4426 41.6289C22.5892 40.2023 22.2018 38.6228 21.9148 37.0094C21.2913 33.4908 21.316 29.9336 21.4302 26.3871C21.5258 23.395 21.7265 20.3982 22.5074 17.4786L22.5089 17.4755ZM35.7689 69.3842C36.1717 69.3024 36.502 69.1449 36.8029 68.8438C38.3184 67.3447 39.8787 65.8965 41.4405 64.4498C42.4807 63.4848 43.5224 62.5199 44.5487 61.5395C45.0611 61.0501 45.5364 60.522 45.9948 60.011C46.1877 59.7964 46.3775 59.5849 46.5658 59.3795C46.5843 59.3795 46.504 59.3702 46.4223 59.3795C43.2508 59.8689 40.0654 59.9878 36.86 59.7871C33.3336 59.5663 29.8951 58.921 26.5369 57.8294C23.8547 56.9586 21.2434 55.9057 18.8097 54.4544C17.1522 53.4678 15.5564 52.3855 13.9946 51.2569C13.8649 51.1519 13.7368 51.0453 13.6088 50.9388C13.3279 50.7057 13.047 50.4725 12.7553 50.2518C12.5007 50.0603 12.4729 49.8781 12.5825 49.5771C14.1011 45.3637 15.8249 41.2429 17.7942 37.2209C17.9423 36.9199 17.9331 36.7516 17.68 36.5076C15.6829 34.5932 13.6936 32.6679 11.7259 30.7287C11.4389 30.4461 11.3185 30.4415 11.0793 30.7812C8.59305 34.2998 6.48955 38.0346 4.79347 41.9932C3.49556 45.024 2.44149 48.135 1.69916 51.348L1.67756 51.3943C1.65595 51.439 1.63435 51.4838 1.62354 51.5301C0.908998 54.5516 0.416688 57.6055 0.177478 60.7073C0.166675 60.8493 0.163588 60.9929 0.160501 61.1381C0.151242 61.5194 0.143526 61.9039 0 62.2682V66.9741L2.45538 69.3503L2.45846 69.3533L2.46464 69.3595L2.48161 69.3765C3.8536 70.7027 5.23176 72.0367 6.62844 73.3846C7.07908 70.4542 7.57294 67.6303 8.20877 64.8296C8.3415 64.2475 8.48348 63.667 8.62546 63.085C8.81066 62.3238 8.9974 61.5642 9.16253 60.7984C9.26284 60.3244 9.39248 60.363 9.70885 60.6208C11.3849 61.9749 13.172 63.1822 15.1181 64.1117C19.8375 66.3612 24.7421 68.1043 29.8735 69.1526C31.8181 69.5494 33.7873 69.7748 35.7751 69.3827L35.7704 69.3873L35.7689 69.3842ZM65.0575 63.2563C64.485 62.0243 63.9155 60.7907 63.3475 59.5571V59.5524C62.7102 58.1752 62.0759 56.798 61.437 55.4239C61.099 54.6998 60.744 53.9819 60.3721 53.2331L60.0619 52.6047C60.0403 52.6479 60.0217 52.6804 60.0063 52.7082C59.977 52.7622 59.96 52.79 59.9569 52.8193C59.4492 56.0739 58.5525 59.2143 57.3364 62.2744C55.736 66.2963 53.5754 69.9817 50.8453 73.3336C47.9856 76.8383 44.6274 79.7718 40.8139 82.1989C40.5068 82.395 40.3154 82.3379 40.0809 82.1171C39.817 81.8685 39.5438 81.6338 39.2614 81.4084C36.0467 78.8717 32.9524 76.1945 30.0201 73.3367C29.7948 73.1159 29.6266 73.0727 29.3395 73.2317C26.878 74.558 24.4056 75.8688 21.9286 77.1672C21.6076 77.334 21.6323 77.4451 21.8237 77.703C22.9642 79.2453 24.1757 80.7337 25.4551 82.1557C27.2422 84.1365 29.1574 85.9954 31.1946 87.7231C37.465 93.0466 44.541 96.891 52.3979 99.3181C52.6896 99.4092 52.9349 99.3937 53.2081 99.2517C54.1187 98.7638 55.0323 98.2836 55.9459 97.8035H55.949L55.9521 97.8004C56.4074 97.5611 56.8626 97.3218 57.3179 97.0825C57.9306 96.7582 58.5417 96.4309 59.159 96.1021L59.1637 96.099C59.747 95.7886 60.335 95.4737 60.94 95.1525L60.7317 95.0429C60.602 94.9734 60.4847 94.9132 60.3705 94.8561C56.7345 93.0512 53.2081 91.0503 49.7882 88.8625H49.7835C49.5551 88.7143 49.4409 88.6417 49.4409 88.5676C49.4409 88.4951 49.5505 88.421 49.7697 88.2758L49.7866 88.2635C52.4071 86.5451 54.7205 84.4808 56.733 82.0738C59.1189 79.2253 61.4045 76.3011 63.329 73.1113C64.522 71.1381 65.5992 69.114 66.0745 66.8259C66.2273 66.0879 66.2659 65.3993 65.8199 64.7246C65.5437 64.3 65.3245 63.8307 65.11 63.3706L65.0621 63.2702L65.0575 63.2563ZM99.1427 54.178C99.3989 55.6772 99.6551 57.1748 99.9622 58.6647L99.9714 58.66C100.081 59.1788 99.8557 59.486 99.6288 59.7979C99.5964 59.8427 99.5625 59.8875 99.5301 59.9338C97.2985 63.1405 94.7397 66.0756 91.8985 68.7574C85.9537 74.3588 79.1509 78.5706 71.4915 81.3961C71.2631 81.481 71.0316 81.5612 70.7986 81.64C70.4621 81.7542 70.1257 81.8685 69.8001 82.0044C69.4358 82.1572 69.3309 82.0183 69.2738 81.6925C69.0963 80.6488 68.9142 79.6051 68.7336 78.5629C68.6349 77.9994 68.5376 77.4359 68.4404 76.8723C68.408 76.684 68.3756 76.4956 68.3416 76.3072C68.1842 75.3948 68.0268 74.4869 67.8555 73.5776C67.7876 73.2225 67.8555 73.0171 68.2105 72.8303C72.1381 70.7475 75.9223 68.4208 79.6123 65.9366C79.8855 65.7498 79.9673 65.5923 79.8762 65.2465C78.1524 58.5736 74.9809 52.6804 70.3726 47.5622C70.3202 47.5036 70.2723 47.4449 70.2245 47.3862C70.189 47.343 70.155 47.2998 70.118 47.2565C67.3447 44.3215 64.2627 41.7601 60.8088 39.6634C60.1576 39.2682 59.4939 38.8915 58.7995 38.4978C58.4507 38.3001 58.0942 38.0979 57.7284 37.8864C58.0602 37.8385 58.3797 37.7922 58.693 37.7459C59.3859 37.644 60.0449 37.5467 60.7085 37.4602C61.9385 37.3012 63.1701 37.1545 64.4032 37.0094C66.8092 36.7238 69.2151 36.4382 71.6073 36.0583C71.9144 36.0074 72.1721 36.1232 72.4283 36.239C72.4406 36.2436 72.4514 36.2498 72.4638 36.2544C74.0734 36.9816 75.376 38.121 76.6029 39.3562C78.8546 41.6258 80.7327 44.1964 82.5338 46.8242C82.577 46.886 82.6032 46.9632 82.631 47.0404C82.6433 47.0743 82.6542 47.1083 82.668 47.1407C84.182 49.1324 85.4753 51.263 86.5432 53.5218C87.3674 55.2557 88.0433 57.0451 88.4971 58.9132C88.5094 58.9642 88.5325 59.0121 88.5603 59.0707C88.5742 59.1016 88.5897 59.134 88.6066 59.1711C92.0327 56.3611 95.2659 53.3875 98.3942 50.1854C98.5686 50.6825 98.6396 51.1596 98.7075 51.6243C98.7322 51.7942 98.7569 51.9624 98.7862 52.1292C98.9081 52.8116 99.0239 53.494 99.1411 54.1764L99.1427 54.178Z"
        fill="url(#paint0_linear_47_398)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_47_398"
          x1="49.9981"
          y1="-4.92236"
          x2="49.9981"
          y2="98.313"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ED00E5" />
          <Stop offset="0.9" stopColor="#3DC5FC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};