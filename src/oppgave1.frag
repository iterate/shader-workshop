#define PI 3.14159265359
#define TWO_PI 6.28318530718

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color = vec3(smoothstep(0.0, .01, abs(st.x-st.y)));

    // Create a new line with a different angle by overwriting `color`
    //    color = 1.-vec3(smoothstep(0.49, .5, st.y) - smoothstep(0.5, .51, st.y));
    // ^^ Adjust the thickness by increasing the difference between the intervals
    // of the first and second smoothstep() functions

    // "Reset" the color if left or right 20% of the screen
    //    color = st.x < 0.2 ? vec3(1., 1., 1.) : color;
    //    color = st.x > 0.8 ? vec3(1., 1., 1.) : color;

    gl_FragColor = vec4(color, 1.);
}
