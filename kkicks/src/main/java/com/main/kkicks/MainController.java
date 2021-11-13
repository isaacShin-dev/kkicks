package com.main.kkicks;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class MainController {
    @RequestMapping("/")
    @ResponseBody
    public String hello (Model model) {
        return "hello, Index Page fucccckkkk";
    }
}
