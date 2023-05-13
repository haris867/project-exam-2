import { CgProfile } from "react-icons/cg";
import Menu from "../../nav";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 863 323"
            version="1.1"
          >
            <path
              d="M 659 162.500 L 659 166 688.429 166 C 713.848 166, 718.071 166.214, 719.429 167.571 C 720.293 168.436, 721 169.973, 721 170.987 C 721 172.002, 706.354 194.982, 688.453 222.055 C 670.553 249.128, 656.047 272.003, 656.217 272.889 C 656.497 274.340, 660.704 274.500, 698.514 274.500 L 740.500 274.500 740.500 271 L 740.500 267.500 709.585 267.235 C 688.810 267.057, 678.232 266.607, 677.335 265.863 C 676.601 265.254, 676 263.691, 676 262.390 C 676 260.952, 688.746 240.887, 708.500 211.229 C 726.375 184.391, 741 161.661, 741 160.717 C 741 159.122, 738.077 159, 700 159 L 659 159 659 162.500"
              fill="#f89305"
              fillRule="evenodd"
            />
            <path
              d="M 379.174 35.513 C 347.645 54.481, 321.598 70, 321.290 70 C 320.983 70, 321.056 63.025, 321.452 54.500 L 322.173 39 311.106 39 L 300.038 39 299.769 61.192 L 299.500 83.385 275 98.143 C 261.525 106.260, 250.621 113.398, 250.768 114.004 C 250.915 114.611, 253.132 118.715, 255.694 123.124 C 258.977 128.775, 260.817 131.012, 261.926 130.705 C 262.792 130.465, 302.608 106.787, 350.406 78.087 C 398.205 49.388, 437.805 26.103, 438.406 26.345 C 439.008 26.586, 477.033 49.557, 522.907 77.391 C 568.782 105.226, 606.624 128, 607.003 128 C 608.155 128, 618.138 111.032, 617.547 110.076 C 616.773 108.823, 440.224 1.857, 438.176 1.400 C 437.254 1.195, 410.704 16.545, 379.174 35.513 M 175.100 151.048 C 162.111 154.450, 152.657 161.244, 145.014 172.671 C 135.721 186.566, 131.523 207.324, 133.824 228.013 C 137.095 257.430, 150.489 275.413, 174.500 282.625 C 183.498 285.327, 201.276 285.148, 210.542 282.262 C 227.865 276.866, 240.244 263.954, 246.744 244.500 C 249.248 237.005, 249.420 235.331, 249.459 218 C 249.505 197.055, 248.535 191.748, 242.327 179 C 237.784 169.669, 227.218 158.760, 218.825 154.734 C 206.463 148.804, 189.220 147.350, 175.100 151.048 M 18.500 151.146 C 17.400 151.797, 16.169 152.818, 15.765 153.415 C 15.361 154.012, 15.024 182.712, 15.015 217.193 L 15 279.887 17.223 281.443 C 18.882 282.605, 22.032 283, 29.650 283 C 44.670 283, 44 284.430, 44 252.365 L 44 227 66.500 227 L 89 227 89 253.345 C 89 277.598, 89.145 279.821, 90.829 281.345 C 92.288 282.666, 94.797 283, 103.256 283 C 119.566 283, 118 290.068, 118 216.476 C 118 157.655, 117.924 155.128, 116.088 152.861 C 114.290 150.640, 113.527 150.500, 103.242 150.500 C 95.444 150.500, 91.833 150.894, 90.654 151.872 C 89.198 153.080, 89 156.166, 89 177.622 L 89 202 66.500 202 L 44 202 44 178.611 C 44 149.305, 44.634 150.621, 30.340 150.232 C 24.092 150.061, 19.770 150.395, 18.500 151.146 M 271 150.663 C 270.175 150.992, 268.712 151.947, 267.750 152.785 C 266.118 154.207, 266 158.526, 266 216.655 C 266 277.667, 266.043 279.043, 268 281 C 269.935 282.935, 271.333 283, 310.845 283 C 358.967 283, 355 284.094, 355 270.826 C 355 258.246, 357.030 259, 323.171 259 L 295 259 295 206.655 C 295 144.827, 296.375 150.633, 281.647 150.283 C 276.616 150.163, 271.825 150.334, 271 150.663 M 372 150.649 C 367.994 152.201, 368 152.102, 368 217.036 C 368 276.464, 368.094 279.775, 369.829 281.345 C 371.288 282.666, 373.797 283, 382.256 283 C 398.566 283, 397 290.068, 397 216.476 C 397 143.597, 398.448 150.616, 383.340 150.284 C 377.928 150.165, 372.825 150.329, 372 150.649 M 421.315 150.967 C 420.114 151.473, 418.651 152.783, 418.065 153.878 C 417.345 155.224, 417 175.599, 417 216.799 C 417 277.629, 417.004 277.735, 419.150 280.463 L 421.299 283.196 446.400 282.738 C 466.022 282.381, 472.919 281.900, 478 280.535 C 500.894 274.385, 515.236 260.308, 521.189 238.144 C 523.913 228.002, 524.153 205.821, 521.650 195.600 C 515.980 172.457, 500.285 157.866, 475.865 153.035 C 465.210 150.927, 425.029 149.404, 421.315 150.967 M 572.354 150.650 C 571.174 150.904, 569.547 151.874, 568.738 152.806 C 566.718 155.133, 523.965 273.865, 523.985 277.095 C 524.013 281.808, 526.639 283, 537 283 C 543.987 283, 546.769 282.614, 548.035 281.468 C 548.966 280.626, 552.123 273.192, 555.051 264.949 L 560.374 249.962 581.827 250.231 L 603.280 250.500 608.417 264.675 C 611.242 272.471, 614.399 279.783, 615.432 280.925 C 617.111 282.780, 618.449 283, 628.084 283 C 639.330 283, 641.104 282.398, 642.461 278.123 C 643.363 275.281, 600.448 156.158, 597.384 153 C 595.133 150.679, 594.225 150.489, 584.730 150.344 C 579.103 150.258, 573.534 150.396, 572.354 150.650 M 655 150.679 C 651.869 151.830, 651 154.397, 651 162.500 C 651 175.256, 648.951 174.411, 681.305 175 L 708.773 175.500 678.405 221.500 L 648.036 267.500 648.018 273.595 C 647.988 283.682, 644.315 283, 698.674 283 C 753.870 283, 749 284.178, 749 270.826 C 749 258.218, 751.171 259, 716.166 259 L 686.989 259 718.195 212.250 L 749.400 165.500 749.450 159.788 C 749.537 149.889, 752.795 150.529, 701.215 150.314 C 676.622 150.211, 655.825 150.375, 655 150.679 M 768 150.693 C 767.175 151.005, 765.712 151.947, 764.750 152.785 C 763.118 154.207, 763 158.526, 763 216.655 C 763 277.667, 763.043 279.043, 765 281 C 766.937 282.937, 768.333 283, 809.500 283 C 859.815 283, 856 283.985, 856 271 C 856 258.302, 857.979 259, 822 259 L 792 259 792 243.500 L 792 228 812.845 228 C 837.947 228, 837 228.456, 837 216.362 C 837 203.993, 838.109 204.557, 813.082 204.194 L 792 203.888 792 189.487 L 792 175.087 821.090 174.793 L 850.179 174.500 852.090 172.139 C 854.828 168.756, 854.827 156.244, 852.089 152.861 L 850.178 150.500 809.839 150.312 C 787.653 150.209, 768.825 150.380, 768 150.693 M 659 162.500 L 659 166 688.429 166 C 713.848 166, 718.071 166.214, 719.429 167.571 C 720.293 168.436, 721 169.973, 721 170.987 C 721 172.002, 706.354 194.982, 688.453 222.055 C 670.553 249.128, 656.047 272.003, 656.217 272.889 C 656.497 274.340, 660.704 274.500, 698.514 274.500 L 740.500 274.500 740.500 271 L 740.500 267.500 709.585 267.235 C 688.810 267.057, 678.232 266.607, 677.335 265.863 C 676.601 265.254, 676 263.691, 676 262.390 C 676 260.952, 688.746 240.887, 708.500 211.229 C 726.375 184.391, 741 161.661, 741 160.717 C 741 159.122, 738.077 159, 700 159 L 659 159 659 162.500 M 186.723 173.092 C 172.898 175.263, 166.059 185.434, 163.762 207.242 C 161.777 226.088, 165.253 244.663, 172.258 252.641 C 177.466 258.572, 182.263 260.476, 192 260.476 C 198.813 260.476, 201.312 260.044, 204.595 258.297 C 210.510 255.149, 214.444 250.146, 217.137 242.343 C 219.280 236.137, 219.500 233.823, 219.500 217.500 C 219.500 201.499, 219.244 198.686, 217.197 192.170 C 212.608 177.564, 201.706 170.739, 186.723 173.092 M 446 216.396 L 446 259 453.451 259 C 467.429 259, 479.490 254.866, 484.999 248.187 C 494.875 236.215, 496.784 207.045, 488.742 191 C 483.352 180.247, 474.929 176.213, 454.250 174.482 L 446 173.792 446 216.396 M 574.783 206.750 L 568.265 224.500 581.269 224.780 C 588.421 224.934, 594.443 224.890, 594.651 224.683 C 595.185 224.149, 582.628 189.013, 581.901 189.006 C 581.572 189.003, 578.369 196.988, 574.783 206.750"
              fill="#044496"
              fillRule="evenodd"
            />
          </svg>
        </NavLink>
      </div>
      <Link
        to="/profile"
        style={{
          zIndex: "2",
          fontSize: "calc(2em + 1vw)",
          color: "var(--color-primary)",
          position: "absolute",
          right: "calc(50px + 10vw)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CgProfile />
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
