#define PI 3.14159265359
#define TWO_PI 6.28318530718

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color = vec3(st.x, st.y, 1.);
    // Change the blue part as a function of time
    //    color.b = abs(sin(u_time));

    // Have one color on the top half and one on the bottom
    //    if (st.y > 0.5){
    //        color = vec3(st.x, st.y, abs(sin(u_time)));
    //    } else {
    //        color = vec3(st.y, st.x, abs(sin(u_time)));
    //    }

    gl_FragColor = vec4(color, 1.);
}
