// Author @patriciogv ( patriciogonzalezvivo.com ) - 2015

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

float circle(vec2 _st, float _radius){
    vec2 pos = _st - vec2(0.5);
    return smoothstep(_radius, _radius+0.01, dot(pos, pos)*PI);
}

vec2 movingTiles(vec2 st, float zoom, float speed) {
    st *= zoom;
    float time = u_time * speed;
    if (fract(time) > 0.5) {
        if (fract(st.y * 0.5) > 0.5) {
            st.x += fract(time) * 2.;
        } else {
            st.x -= fract(time) * 2.;
        }
    } else {
        if (fract(st.x * 0.5) > 0.5) {
            st.y += fract(time) * 2.;
        } else {
            st.y -= fract(time) * 2.;
        }
    }
    return fract(st);
}

float shit(vec2 st) {
    vec2 pos = vec2(0.5)-st;
    float a = atan(pos.y, pos.x);
    float f = cos(a*3.);
    return f;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    st = movingTiles(st, 10., 0.8);
    vec3 color = vec3(circle(st, 0.2), 0.3, 1.0);
    color = fract(u_time) > 0.5 ? vec3(shit(st)) * color : color;

    gl_FragColor = vec4(color, abs(cos(u_time)));
}
