package com.dcc.videoGameApi.service;

import com.dcc.videoGameApi.models.VideoGame;
import com.dcc.videoGameApi.repository.VideoGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class VideoGameService {

    @Autowired
    private VideoGameRepository videoGameRepository;

    public long GetCountOfGames(){
        return videoGameRepository.count();
    }


    public List<VideoGame> getAllVideoGames() {
        return videoGameRepository.findAll();
    }

    public List<VideoGame> getByID(@PathVariable int id){
        return videoGameRepository.findAll().stream().filter(f->f.getId()==id).toList();
    }
}
