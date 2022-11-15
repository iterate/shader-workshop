#define PI 3.14159265359
#define TWO_PI 6.28318530718

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color = vec3(0.0);

    // If either x or y is lower than 0.3 set the color to black
    vec2 bl = step(vec2(0.3), st);

    // If either x or y is higher than 0.7 set the color to black
    vec2 tr = step(vec2(0.3), 1.0-st);
    // ^ This is equivalent to
    //    vec2 tr = 1.-step(vec2(0.7), st);

    // Combine the calculations by multiplying them: If any says 0.0, aka black,
    // the multiplication will result in 0.0
    color = vec3(bl.x * bl.y * tr.x * tr.y);

    // Multiply by a color, only the white areas will be affected
    //    color *= vec3(1.0, 0.3, 1.);

    gl_FragColor = vec4(color, 1.);
}
