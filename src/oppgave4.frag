#define PI 3.14159265359
#define TWO_PI 6.28318530718

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate(float _angle){
    return mat2(cos(_angle), -sin(_angle),
    sin(_angle), cos(_angle));
}

mat2 scale(vec2 _scale){
    return mat2(_scale.x, 0.0,
    0.0, _scale.y);
}

vec3 box(in vec2 _st, in float _size){
    vec2 bl = step(vec2(_size), _st);
    vec2 tr = step(vec2(_size), 1.0-_st);
    return vec3(bl.x * bl.y * tr.x * tr.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // Translate
    //    st += vec2(0.3, 0.1);

    // Rotate
    // We need to translate the coordinates since we're rotating around the origin
    //    st -= vec2(0.5);
    //    st *= rotate(PI/3.);
    //    st += vec2(0.5);

    // Scale
    // We need to translate the coordinates since we're scaling around the origin
    //    st -= vec2(0.5);
    //    st *= scale(vec2(2.0, 2.0));
    //    st += vec2(0.5);

    // Change over time
    // Use a parameter that depends on time, such as
    // abs(sin(u_time))

    vec3 color = box(st, 0.4);

    gl_FragColor = vec4(color, 1.);
}
