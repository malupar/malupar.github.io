export const blog_compilers = {
    id: 'compilers',
    title: 'Compilers and analysis of different programming languages',
    date: 'October 26, 2025',
    snippet: 'This post is a mix from notes taken from the programming languages course and the "Compilers: Principles, techniques \& tools".',
    content: [
          {
            type: 'h2',
            id: 'compiler-intro',
            text: 'Introduction to compilers'
          },
          {
            type: 'p',
            id: 'compiler-intro-text',
            text: `
            A compiler is, simply put, a tool that translates code from a <b>source</b> language to a <b>target</b> language. In case the code is incorrect in the original source language, the compiler is tasked with reporting informative errors.
            </br>
            For example, let's say that we have a program written in C++, when we use a compiler like <i>gcc</i> we are generating code in machine-language. On the other hand, we might also have an interpreter which takes the source code, an input and afterwards generates an output. Other languages, work in the middle where they have a translator towards an intermediate language and afterwards an interpreter is used.
            </br>
            `
          },
          {
            type: 'h3',
            id: 'compiler-basics',
            text: 'Programming language basics'
          },
          {
            type: 'h2',
            id: 'perl',
            text: 'Analysis on Perl'
          },
          {
            type: 'p',
            id: 'perl-text',
            text: `
            Here is an example on how some primitive types work on perl.
            `
          },
          {
        type: 'code',
        language: 'perl',
        code: `
@nats = (1, 2, 3);
@letras = (a..z);
@mezcla = (@nats, 4, 5, @letras);   # (1,2,3,4,5,'a','b',...,'z')
@s = @mezcla[4,6];                  #  (5,'a')
$a = @s[0];                         # 5
              `
            },
            {
            type: 'p',
            id: 'perl-text',
            text: `
            Now let us dive into how the interpreter actually breaks down the perl language into a tree of operations For the following instruction:
            `
          },
                      {
        type: 'code',
        language: 'perl',
        code: `
$x = $y + $z
              `
            },
            {
            type: 'p',
            id: 'perl-text',
            text: `
            The following bytecode is generated:
            `
          },
            {
              type: 'code',
              language: 'actionscript',
              code:`
.1  LISTOP (0x8179888) leave
 2      OP (0x81798b0) enter
 3      COP (0x8179850) nextstate
 4      BINOP (0x8179828) sassign
 5          BINOP (0x8179800) add [1]
 6              UNOP (0x81796e0) null [15]
 7                  SVOP (0x80fafe0) gvsv  GV (0x80fa4cc) *y
 8              UNOP (0x81797e0) null [15]
 9                  SVOP (0x8179700) gvsv  GV (0x80efeb0) *z
10          UNOP (0x816b4f0) null [15]
11              SVOP (0x816dcf0) gvsv  GV (0x80fa460) *x`
            },
            {
            type: 'p',
            id: 'perl-text',
            text: `
            If we break down what is happening at each step we can see that in line 4 we have a binary operator called "sassign" that obviously refers to the "=" symbol between "x" and "y + z", the two operators.
            </br>
            Moreover, we can see that line 5 corresponds to the calculation of y+z and line 10 to its storage in x. Both of these lines describe the two branches of the "=" operator.
            `
          },
        ]
}